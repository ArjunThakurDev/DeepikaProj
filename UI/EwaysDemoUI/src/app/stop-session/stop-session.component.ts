import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stopSessionService } from './stop-session.service';
import { ChargeSession} from '../charge-session-list/charge-session';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 // selector: 'app-stop-session',
  templateUrl: './stop-session.component.html',
  styleUrls: ['./stop-session.component.css']
})
export class StopSessionComponent implements OnInit {

  _stopSession = new ChargeSession() ;
  private _sessionId : number;
  private error : string = '';
  stopForm : FormGroup;
  _status : string = 'Stopped';

  constructor(private route : Router,
    private stopSessionService : stopSessionService) { }
    ngOnInit() : void {
      this.stopForm = new FormGroup({
        'id': new FormControl(this._stopSession.id,Validators.required),
        'sessionStopTime': new FormControl(this._stopSession.sessionStopTime,Validators.required),
        'status': new FormControl(this._stopSession.status,Validators.required)
      });
    }

      get id() { return this.stopForm.get('id'); }

      get sessionStopTime() { return this.stopForm.get('sessionStopTime'); }
    
      get status() { return this.stopForm.get('status');}
      
  OnBack() : void
  {
    this.route.navigate(['/sessions']);
  }

  stopSession(): void {
    console.log(this.stopForm.value);
    this.stopSessionService.stopSession(this.stopForm.value).subscribe(
      ses => {
        this._stopSession = ses;
        this.reset();
        this._sessionId = ses.id;
      },

      error => this.error = <any>error);
      
  }

  private reset()  : void {
    this._sessionId = null;
    this._stopSession.id = null;
    this._stopSession.sessionStopTime = null;
    this._stopSession.status = null;
  }
  

}
