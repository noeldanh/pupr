import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatChipsModule,
  MatSidenavModule
} from '@angular/material';
import { ShareModule } from 'ng2share/share.module';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SwipeComponent } from './main/swipe/swipe.component';
import { PupsComponent } from './main/dashboard/pups/pups.component';
import { FriendsComponent } from './main/dashboard/friends/friends.component';
import { SettingsComponent } from './main/dashboard/settings/settings.component';
import { UploadComponent } from './main/dashboard/upload/upload.component';
import { LandingComponent } from './landing/landing.component';
import { PupService } from './pup.service';
import { UserService } from './user.service';
import { UploadService } from './main/dashboard/upload/upload.service';
import { SavedComponent } from './main/dashboard/saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    DashboardComponent,
    SwipeComponent,
    PupsComponent,
    FriendsComponent,
    SettingsComponent,
    UploadComponent,
    LandingComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatChipsModule,
    MatSidenavModule,
    ShareModule
  ],
  entryComponents: [RegisterComponent],
  providers: [PupService, UserService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule {}
