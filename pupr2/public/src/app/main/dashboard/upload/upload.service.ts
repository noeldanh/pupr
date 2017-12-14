import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UploadService {

  constructor(private _http: Http) { }
  storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  createPup(newPup){
    return this._http.post('/upload', newPup).map(data => data.json()).toPromise();
  }
}
