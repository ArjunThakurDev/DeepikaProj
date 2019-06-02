import { Component, OnInit } from '@angular/core';
import { ChargeSessionServiceService } from './charge-session-service.service';
import { ChargeSession } from './charge-session';

@Component({
  selector: 'app-charge-session-list',
  templateUrl: './charge-session-list.component.html',
  styleUrls: ['./charge-session-list.component.css']
})
export class ChargeSessionListComponent implements OnInit {

  _sessionList: ChargeSession[];
  errorMessage = '';
  constructor(private sessionService: ChargeSessionServiceService) { }

  refreshSession(): void {
    this.sessionService.getSessions().subscribe(
      sess => {
        this._sessionList = sess;
      },
      error => this.errorMessage = <any>error

    );
  }


  ngOnInit(): void {
    this.refreshSession();
  }



}
