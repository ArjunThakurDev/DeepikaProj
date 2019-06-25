import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { ChargerListService } from './charger-list.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  //selector: 'app-charger-list',
  templateUrl: './charger-list.component.html',
  styleUrls: ['./charger-list.component.css']
})
export class ChargerListComponent {

  
  _chargerList = new Chargers();
  errorMessage = '';
  constructor(private route : ActivatedRoute,
              private route1 : Router,
    private chargerListService: ChargerListService) {}

  ChargerList(id : number): void {
    this.chargerListService.getChargersList(id).subscribe(
      charger => {
        this._chargerList = charger;
      },
      error => this.errorMessage = <any>error

    );
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.ChargerList(id);
  }
  OnBack() : void
  {
    this.route1.navigate(['/chargers']);
  }

 
}
