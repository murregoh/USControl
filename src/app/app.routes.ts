import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserStoriesComponent } from './components/user-stories/user-stories.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'backlog', component: BacklogComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'userStories', component: UserStoriesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
