import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class PupService {

  constructor(private _http:Http) { }

  index(){
    return this._http.get('/pups').map(data=> data.json()).toPromise();
  }
  create(poll){
    return this._http.post('/pups', poll).map(data=> data.json()).toPromise();
  }

  show(id:string){
    return this._http.get(`/pups/${id}`).map(data=> data.json()).toPromise();
  }

  delete(id:string){
    console.log(id)
    return this._http.delete(`/pups/${id}`, {}).map(data=> data.json()).toPromise();
  }

}
