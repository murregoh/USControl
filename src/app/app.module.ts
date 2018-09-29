import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/shared/panel/panel.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { UsCardComponent } from './components/us-card/us-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    UsCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
