import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Chargers } from "../chargers/chargers";

@Injectable({
    providedIn: 'root'
  })
export class DeleteChargerService
{
    private deleteChargerURL = 'https://localhost:5001/api/chargerInfo/DeleteCharger/';
    constructor(private http :HttpClient){}

    deleteCharger(charger : any) :Observable<void>
    {
        let Id = charger.id;
        return this.http.delete<void>(this.deleteChargerURL + Id).pipe(
            catchError(this.handleErrorObservable));

    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return throwError(error.message || error);
            }
    }




