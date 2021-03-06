import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ChargeSession } from './charge-session';


@Injectable({
  providedIn: 'root'
})
export class ChargeSessionServiceService {

  private sessionUrl = 'https://localhost:5001/api/session';

  constructor(private http: HttpClient) { }

  getSessions(): Observable<ChargeSession[]> {
    return this.http.get<ChargeSession[]>(this.sessionUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
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
