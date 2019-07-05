import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { AddChargerService } from './add-charger.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  //selector: 'app-add-charger',
  templateUrl: './add-charger.component.html',
  styleUrls: ['./add-charger.component.css']
})
export class AddChargerComponent implements OnInit {


  _addCharger = new Chargers() ;
  private chargerId: number;
  private error: String = '';
  addCharger : FormGroup;

  constructor(private route: Router,
    private addChargerService: AddChargerService) { }

  ngOnInit(): void {
    this.addCharger = new FormGroup(
      {
        'chargerStationType': new FormControl(this._addCharger.chargerStationType,Validators.required),
        'powerInVolt': new FormControl(this._addCharger.powerInVolt,Validators.required)
      });
    }
    
     get chargerStationType() { return this.addCharger.get('chargerStationType'); }

      get powerInVolt() { return this.addCharger.get('powerInVolt'); }

  OnBack(): void {
    this.route.navigate(['/chargers'])
  }

  addNewCharger(): void {
    console.log(this.addCharger.value);
    this.addChargerService.addNewCharger(this.addCharger.value).subscribe(
      charger => {
        this._addCharger = charger;
        this.reset();
        this.chargerId = charger.id;
        console.log(this.chargerId);
      },

      error => this.error = <any>error);
  }

  private reset()  : void {

    this._addCharger.chargerStationType = null;
    this._addCharger.powerInVolt = null;
  }

}

