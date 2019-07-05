import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Chargers } from "../chargers/chargers";

@Injectable({
    providedIn: 'root'
  })
export class UpdateChargerService
{
    private updateChargerURL = 'https://localhost:5001/api/chargerInfo/UpdateCharger';
    constructor(private http :HttpClient){}

    updateCharger(charger : any) : Observable<any>
    {
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        let body = JSON.stringify(charger);
        return this.http.put<any>(this.updateChargerURL,body,{headers : headers}).pipe(
            catchError(this.handleErrorObservable));
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return throwError(error.message || error);
            }
    }




