import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  loginU(loginUser){
      console.log(loginUser)
    return this._http.post('/login', loginUser).map(data => data.json()).toPromise()
  }


  create(newUser){
    console.log("in the user service");
    return this._http.post('/users', newUser).map(data => data.json()).toPromise();
  }

  show(id:number) {
    return this._http.get(`/users/${id}`).map(data => data.json()).toPromise();
  }


  update(loginUser) {
    console.log("in the user service")
    return this._http.put('/users', loginUser).map( data => data.json()).toPromise();
  }

  authenticate(loginUser){
    console.log(loginUser);
    return this._http.post('/session', loginUser).map(data => data.json()).toPromise()
  }

  locationUpdate(location, currentUser) {
    console.log(location, ' and ', currentUser);
    return this._http.post('/locationUpdate',[location, currentUser]).map(data => data.json()).toPromise()
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  addToFavorites(dogID, userID) {
    console.log("came into service fav")
    return this._http.post('/addToFavorites',{'dogID': dogID, 'userID': userID}).map(data => data.json()).toPromise()
  }
}
