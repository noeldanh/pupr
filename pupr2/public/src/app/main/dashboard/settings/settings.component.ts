import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { MatExpansionModule } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  currentUser = { _id: '' };

  step = 0;
  

  constructor(private _userService: UserService) { }
  
  setStep(index: number) {
    this.step = index;
  };
  
  nextStep() {
    this.step++;
  };
  
  prevStep() {
   this.step--;
  };

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    console.log(this.currentUser);
  };

  updateCurrentUser(currentUser) {
    this._userService.update(currentUser)
    .then(data => {
      console.log("User object has been updated and is now: ", this.currentUser)
    })
    .catch(err => console.log("There was an error updating user object, ", err))
  };


  ngOnInit() {
    this.getCurrentUser();
  }

}
