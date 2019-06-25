import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stopSessionService } from './stop-session.service';
import { ChargeSession} from '../charge-session-list/charge-session';
@Component({
 // selector: 'app-stop-session',
  templateUrl: './stop-session.component.html',
  styleUrls: ['./stop-session.component.css']
})
export class StopSessionComponent implements OnInit {

  _stopSession = new ChargeSession();
  private sessionId : number;
  private error : string = '';

  constructor(private route : Router,
    private stopSessionService : stopSessionService) { }
    ngOnInit() {
    }
  OnBack() : void
  {
    this.route.navigate(['/sessions']);
  }

  stopSession() : void
  {
    this.stopSessionService.stopSession(this._stopSession).subscribe(
      sess => {
        this._stopSession = sess;
        this.reset();
        this.sessionId= sess.id;
      },
      error => this.error = <any>error);
    }

  reset() : void{
    this.sessionId = null;
    this._stopSession.id = null;
    this._stopSession.sessionStopTime= null;
    this._stopSession.status = null;
  }
  

}
