import { Component, OnInit } from '@angular/core';
import { PupService } from './../../../pup.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  userPups;
  constructor(private _pupService: PupService,) { }

  ngOnInit() {
      this.getAllPups()
  }

  getAllPups(){
  this._pupService.index()
        .then( (response) => {
            this.userPups = response
            // for(var key)
            // console.log(response)
        })
        .catch( (err) => console.log('Error finding dog'))
}
}
