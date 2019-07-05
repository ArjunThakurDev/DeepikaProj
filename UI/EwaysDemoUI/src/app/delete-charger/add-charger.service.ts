import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Chargers } from '../chargers/chargers';

@Injectable({
  providedIn: 'root'
})
export class AddChargerService {

  private addChargerUrl = 'https://localhost:5001/api/chargerInfo/AddCharger';
  constructor(private http: HttpClient) { }

  addNewCharger(charger : any) : Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(charger);
    return this.http.post<any>(this.addChargerUrl, body,{headers : headers}).pipe(
    catchError(this.handleErrorObservable));
    
  }
  
     private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return throwError(error.message || error);
        }
}
