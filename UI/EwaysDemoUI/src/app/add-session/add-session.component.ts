import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddSessionService } from './add-session.service'
import { ChargeSession } from '../charge-session-list/charge-session';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { statusValidator } from '../shared/status.validator';

@Component({
  //selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  _addSession = new ChargeSession() ;
  private sessionId: number;
  private error: String = '';
  addForm : FormGroup;
  constructor(private route: Router,
    private addSessionService: AddSessionService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        'chargerId': new FormControl(this._addSession.chargerId,Validators.required),
        'sessionStartTime': new FormControl(this._addSession.sessionStartTime),
        'status': new FormControl(this._addSession.status,[Validators.required,statusValidator])
      });
    }
    
     get chargerId() { return this.addForm.get('chargerId'); }

      get sessionStartTime() { return this.addForm.get('sessionStartTime'); }
    
      get status() { return this.addForm.get('status'); }
    

  OnBack(): void {
    this.route.navigate(['/sessions'])
  }

  addNewSession(): void {
    this.addSessionService.addNewSession(this._addSession).subscribe(
      sess => {
        this._addSession = sess;
        this.reset();
        this.sessionId = sess.id;
      },

      error => this.error = <any>error);
      
  }

  private reset()  : void {
    this.sessionId = null;
    this._addSession.chargerId = null;
    this._addSession.sessionStartTime = null;
    this._addSession.status = null;
  }
}
