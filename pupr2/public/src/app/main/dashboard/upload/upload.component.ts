import { Component, OnInit } from '@angular/core';

import { UploadService } from './upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  pupInfo = {};
  pupErrors = [];
  constructor(private _uploadService: UploadService, private _router: Router) { }

  ngOnInit() {
  }

  addPup(pupInfo){
    console.log('inputed credentials:', pupInfo);
    return this._uploadService.createPup(pupInfo)
    .then(pup => { console.log('returned pup:', pup) })
    .catch(err => { console.log(err) })
  }

  goBack() {
    window.history.back();
  }

}
