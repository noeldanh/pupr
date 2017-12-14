import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser = { _id: '' };

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {}

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    console.log(this.currentUser);
  };

  ngOnInit() {
    this.getCurrentUser();
  }

  logout() {
    this._userService.logout();
    this._router.navigate(['/']);
  }

}
