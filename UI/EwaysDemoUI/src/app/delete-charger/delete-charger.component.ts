import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { DeleteChargerService } from './delete-charger.service';

@Component({
  //selector: 'app-delete-charger',
  templateUrl: './delete-charger.component.html',
  styleUrls: ['./delete-charger.component.css']
})
export class DeleteChargerComponent implements OnInit {

  _deleteCharger = new Chargers();
  private error : string = '';

  constructor(private route : Router,
    private deleteChargerService : DeleteChargerService) { }
    ngOnInit() {
    }
  OnBack() : void
  {
    this.route.navigate(['/chargers']);
  }

  deleteCharger() : void
  {
    this.deleteChargerService.deleteCharger(this._deleteCharger).subscribe(
      ()=>{
        console.log("deleted");
        this.reset();
      },
      (err) => console.log(err));
     
    }

  reset() : void{
    this._deleteCharger.id = null;
    
  }
  

}
