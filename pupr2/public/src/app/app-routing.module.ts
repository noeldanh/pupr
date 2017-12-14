import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SwipeComponent } from './main/swipe/swipe.component';
import { LandingComponent } from './landing/landing.component';
import { PupsComponent } from './main/dashboard/pups/pups.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SavedComponent } from './main/dashboard/saved/saved.component';
import { FriendsComponent } from './main/dashboard/friends/friends.component';
import { SettingsComponent } from './main/dashboard/settings/settings.component';
import { UploadComponent } from './main/dashboard/upload/upload.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'login', component: LoginComponent, children: [
    { path: 'register', component: RegisterComponent }
  ] },
  { path: 'main', component: MainComponent, children: [
    { path: 'swipe', component: SwipeComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'saved', component: SavedComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'settings', component: SettingsComponent }
    ] },
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
