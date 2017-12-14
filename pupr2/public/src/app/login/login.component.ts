import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = new User();
  // newUser = {};
  loginErrors = [];
  selectedOption: string;
  active_register:boolean = false;

  constructor(public dialog: MatDialog, private _userService: UserService, private _router: Router) { }

  login() {
      this.loginUser
  	this._userService.loginU(this.loginUser)
  		.then( (success) => {
  			this._router.navigate(['/main/swipe'])
  		})
  		.catch( (err) => {
  			this.loginErrors = JSON.parse(err._body);
  		})
  }

  openDialog() {
    if(!this.active_register){
      console.log("registration dialog loading...");
      let dialogRef = this.dialog.open(RegisterComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.selectedOption = result;
      });
      //The line below stops the user from being able to open the register dialog if the dialog has been open and closed already.
      //this.active_register = true;
    }
  }


  ngOnInit() {
  }

}
