import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
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

    stopSession(ses : any) : Observable<any>
    {
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        let body = JSON.stringify(ses);
        return this.http.put<any>(this.stopSessionURL,body,{headers : headers}).pipe(
            catchError(this.handleErrorObservable));
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return throwError(error.message || error);
            }
    }




