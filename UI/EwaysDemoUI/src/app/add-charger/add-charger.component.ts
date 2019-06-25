import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { AddChargerService } from './add-charger.service';

@Component({
  //selector: 'app-add-charger',
  templateUrl: './add-charger.component.html',
  styleUrls: ['./add-charger.component.css']
})
export class AddChargerComponent implements OnInit {


  _addCharger = new Chargers() ;
  private chargerId: number;
  private error: String = '';

  constructor(private route: Router,
    private addChargerService: AddChargerService) { }

  ngOnInit(): void {
  }
  OnBack(): void {
    this.route.navigate(['/chargers'])
  }

  addNewCharger(): void {
    this.addChargerService.addNewCharger(this._addCharger).subscribe(
      charger => {
        this._addCharger = charger;
        this.reset();
        this.chargerId = charger.id;
      },

      error => this.error = <any>error);
  }

  private reset()  : void {
    this.chargerId = null;
    this._addCharger.id = null;
    this._addCharger.chargerStationType = null;
    this._addCharger.powerInVolt = null;
  }

}

