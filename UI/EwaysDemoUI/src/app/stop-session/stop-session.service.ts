import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ChargeSession } from "../charge-session-list/charge-session";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class stopSessionService
{
    private stopSessionURL = 'https://localhost:5001/api/session/StopSession';
    constructor(private http :HttpClient){}

    stopSession(sess : ChargeSession) : Observable<ChargeSession>
    {
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        let body = JSON.stringify(sess);
        return this.http.put<ChargeSession>(this.stopSessionURL,body,{headers : headers}).pipe(
            catchError(this.handleErrorObservable));
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
            }
    }




