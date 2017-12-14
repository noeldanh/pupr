import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../../user.service';
import { User } from './../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() createUserEvent = new EventEmitter
  registrationErrors = [];
  newUser = new User();
  // errors = []
  constructor(private _userService: UserService, private _router: Router) { }
  
  ngOnInit() {
  }

  createUser(){
      this.newUser;
      this._userService.create(this.newUser)
        .then( (response)=> {
            console.log(response)
            this._router.navigateByUrl('/main/swipe');
        })
        .catch( (err)=> this.registrationErrors = JSON.parse(err._body) )
  }
}
