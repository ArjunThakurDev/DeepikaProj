import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { UpdateChargerService } from './update-charger.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  //selector: 'app-update-charger',
  templateUrl: './update-charger.component.html',
  styleUrls: ['./update-charger.component.css']
})
export class UpdateChargerComponent implements OnInit {

  _updateCharger = new Chargers();
  private error : string = '';
  private chargerId : number;
  updateForm : FormGroup;

  constructor(private route : Router,
    private updateChargerService : UpdateChargerService) { }
    ngOnInit() {
      this.updateForm = new FormGroup(
        {
          'id' : new FormControl(this._updateCharger.id,Validators.required),
          'chargerStationType' : new FormControl(this._updateCharger.chargerStationType,Validators.required),
          'powerInVolt' : new FormControl(this._updateCharger.powerInVolt,Validators.required)
        }
      );
    }
    get id() { return this.updateForm.get('id'); }
    get chargerStationType() { return this.updateForm.get('chargerStationType'); }
    get powerInVolt() { return this.updateForm.get('powerInVolt'); } 
  OnBack() : void
  {
    this.route.navigate(['/chargers']);
  }

  updateCharger() : void
  {
    this.updateChargerService.updateCharger(this.updateForm.value).subscribe(
     charger => {
        this._updateCharger = charger;
        this.reset();
        this.chargerId = charger.id;
      },
      error => this.error = <any>error);
    }

  reset() : void{
    this.chargerId = null;
    this._updateCharger.chargerStationType =  null;
    this._updateCharger.powerInVolt= null;
  }
  

}
