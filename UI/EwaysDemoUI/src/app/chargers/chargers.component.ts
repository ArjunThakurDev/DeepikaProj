import { Component, OnInit } from '@angular/core';
import { Chargers } from './chargers';
import { ChargersService } from './chargers.service';

@Component({
  //selector: 'app-chargers',
  templateUrl: './chargers.component.html',
  styleUrls: ['./chargers.component.css']
})
export class ChargersComponent implements OnInit {

  _chargers : Chargers[];
  errorMessage: any;
  constructor(private chargerservice : ChargersService) { }

  ngOnInit() : void {
    this.getChargers();
  }

  getChargers() : void
  {
    this.chargerservice.getChargers().subscribe(
      charger => this._chargers = charger,
      error => this.errorMessage = <any> error
    );
  }

}
