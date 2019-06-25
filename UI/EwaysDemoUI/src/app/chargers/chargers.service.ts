import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { Chargers } from "./chargers";
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable(
{
  providedIn : 'root'
})
export class ChargersService
{
    private getChargerURL = "https://localhost:5001/api/chargerInfo";
   constructor(private http : HttpClient){}

   getChargers() : Observable<Chargers[]>
   {
       return this.http.get<Chargers[]>(this.getChargerURL).pipe(
           tap(data => console.log("ALL" + JSON.stringify(data))),
           catchError(this.handleError));
   }
   private handleError(err: HttpErrorResponse) {
    // in a real worlng d app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}