import { Component, OnInit, OnDestroy } from '@angular/core';
// import { PupService } from './../pup.service';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import "hammerjs"

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  currentUser: any;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight'}
  dogIndex: number = 0;
  dogList: any[] = [
    {
      '_id': "507f1f77bcf86cd799439011",
      'name': 'Luka',
      'image': 'https://drpem3xzef3kf.cloudfront.net/photos/pets/38632420/2/?bust=1500427800&width=632&no_scale_up=1',
      'age': 7,
      'sex': 'Male',
      'breed': 'Husky',
      'shelter': "Please, Don't kill me, INC",
      'Description': 'Amazing loving boy LUKA we rescue from the death raw. He was sick with a kennel cough and we took him to the vet. He is much better now and ready for his new loving forever home. Yard needs to be gated all around with high fence. He was left neglected and now he will need to be part of new family. Need lots of love and somebody who will understand HUSKY breed.',
      'shelterLink': 'https://plsdontkillme.org/adoption/'
    },
    {
      '_id': "507f191e810c19729de860ea",
      'name': 'Pig',
      'image': 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37390338/1/?bust=1486690709&width=632&no_scale_up=1',
      'age': 5,
      'sex': 'Male',
      'breed': 'American Staffordshire Terrier',
      'shelter': "Chews Life Dog Rescue",
      'Description': 'Pig is a 4 year old boy who lives up to his name. Pig will be 5 on October 7, 2017. Sometimes we forget he is a dog because of all the piggies snorts he makes! He is a big dude, weighing in at about 80+ pounds. Pig is being crate trained and is already potty trained, UTD on vaccinations, microchipped, and neutered.',
      'shelterLink': 'https://www.chewslife.org/pig'
    },
    {
      '_id': "5349b4ddd2781d08c09890f4",
      'name': 'Marina',
      'image': 'https://drpem3xzef3kf.cloudfront.net/photos/pets/35374825/1/?bust=1465853142&width=632&no_scale_up=1',
      'age': 17,
      'sex': 'Female',
      'breed': 'American Staffordshire Terrier',
      'shelter': "Chews Life Dog Rescue",
      'Description': "Marina is looking for her forever home. Marina was rescued from the streets of Tijuana. Her birthday is estimated to be in June of 2015. She was once someone's dog; however, they hacked her ears off and used her for breeding. When they were done with her they dumped her on the streets. She lived there for months, fending off abusive humans and other animals. Finally a good samaritan reached out to us and asked us to help. Though Marina has a rough past you would never be able to tell. She is kid and dog friendly and very sweet and gentle. She would do best with other mellow dogs. She also wouldn't mind being the only dog in the home. ",
      'shelterLink': 'https://www.chewslife.org/marina'
    },
    {
      '_id': "5349b4ddd2781d08c09890f2",
      'name': 'Kemp',
      'image': 'https://drpem3xzef3kf.cloudfront.net/photos/pets/39419852/1/?bust=1505830348&width=632&no_scale_up=1',
      'age': 3,
      'sex': 'Male',
      'breed': 'Poodle',
      'shelter': "City of Los Angeles North Central Animal Shelter",
      'Description': 'Pet ID: A1728731 Spayed/Neutered',
      'shelterLink': '(888) 452-7381'
    }

  ];
  currentDog: any = this.dogList[this.dogIndex];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.currentUser = this._userService.getCurrentUser();
    // console.log("before if statement ")
    if (this.currentUser.swipeLocation) {
      console.log("in if statement")
      this.dogIndex = this.currentUser.swipeLocation
    } else {
    //   console.log("in else")
      this.dogIndex = 0;
    }

  }

  ngOnDestroy() {
    console.log("This happened");
    alert("yes yes yes");
  }

  getNextDog() {
    console.log("came into get nextDog")
    if (this.dogIndex >= this.dogList.length - 1 || this.dogIndex < 0) {
      this.dogIndex = 0;
    } else {
      this.dogIndex += 1;
    }
    this._userService.locationUpdate(this.dogIndex, this.currentUser._id)
    .then(data => {
      console.log("Location was updated to ", this.dogIndex)
      console.log("Curent User ", this.currentUser)
    })
    .catch(err => console.log("There was an error updating the final location, ", err))

    this.currentDog = this.dogList[this.dogIndex]
    console.log(this.currentDog)
  }

  addToFavorites(dogID){
    console.log("came into componenet fav")
    this._userService.addToFavorites(dogID, this.currentUser._id)
    .then(data => {
      console.log("Added the dog successfully, my dog list. ", data)
      this.getNextDog()
    })
    .catch(err => console.log("There was and error adding dog to favorites, ", err))

  }

  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // if (this.dogIndex > this.dogList.length || this.dogIndex > 0) {
    //   this.dogIndex = 0;
    // }
    if (action === this.SWIPE_ACTION.LEFT) {
      this.getNextDog()
    }

  }


}
