import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { UpdateChargerService } from './update-charger.service';

@Component({
  //selector: 'app-update-charger',
  templateUrl: './update-charger.component.html',
  styleUrls: ['./update-charger.component.css']
})
export class UpdateChargerComponent implements OnInit {

  _updateCharger = new Chargers();
  private error : string = '';

  constructor(private route : Router,
    private updateChargerService : UpdateChargerService) { }
    ngOnInit() {
    }
  OnBack() : void
  {
    this.route.navigate(['/chargers']);
  }

  updateCharger() : void
  {
    this.updateChargerService.updateCharger(this._updateCharger).subscribe(
     charger => {
        this._updateCharger = charger;
        this.reset();
      },
      error => this.error = <any>error);
    }

  reset() : void{
    this._updateCharger.id = null;
    this._updateCharger.chargerStationType =  null;
    this._updateCharger.powerInVolt= null;
  }
  

}
