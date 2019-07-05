import { Component, OnInit } from '@angular/core';
import { Chargers } from '../chargers/chargers';
import { Router } from '@angular/router';
import { DeleteChargerService } from './delete-charger.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  //selector: 'app-delete-charger',
  templateUrl: './delete-charger.component.html',
  styleUrls: ['./delete-charger.component.css']
})
export class DeleteChargerComponent implements OnInit {

  _deleteCharger = new Chargers();
  private error : string = '';
  private chargerId : string;
  deleteForm : FormGroup;

  constructor(private route : Router,
    private deleteChargerService : DeleteChargerService) { }
    ngOnInit() {
      this.deleteForm = new FormGroup(
        {
          'id' : new FormControl(this._deleteCharger.id,Validators.required)
        }
      );

    }
    get id() { return this.deleteForm.get('id'); }
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
