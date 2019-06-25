import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChargeSession } from '../charge-session-list/charge-session';
import { catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catchError';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AddSessionService {

  private addSessionUrl = 'https://localhost:5001/api/session/StartSession';
  constructor(private http: HttpClient) { }

  addNewSession(sess :ChargeSession) : Observable<ChargeSession> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(sess);
    return this.http.post<ChargeSession>(this.addSessionUrl, body,{headers : headers}).pipe(
    catchError(this.handleErrorObservable));
    
  }
  
     private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
        }
}
