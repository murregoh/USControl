import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services

// Components
import { AppComponent } from './app.component';
import { PanelComponent } from './components/shared/panel/panel.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { UsCardComponent } from './components/us-card/us-card.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserStoriesComponent } from './components/user-stories/user-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    UsCardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BacklogComponent,
    ProfileComponent,
    UserStoriesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
