import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Chargers } from '../chargers/chargers';

@Injectable({
  providedIn: 'root'
})
export class AddChargerService {

  private addChargerUrl = 'https://localhost:5001/api/chargerInfo/AddCharger';
  constructor(private http: HttpClient) { }

  addNewCharger(charger :Chargers) : Observable<Chargers> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(charger);
    return this.http.post<Chargers>(this.addChargerUrl, body,{headers : headers}).pipe(
    catchError(this.handleErrorObservable));
    
  }
  
     private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
        }
}
