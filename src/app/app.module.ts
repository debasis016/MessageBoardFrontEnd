import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { WebService } from './web.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages-component';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';

import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

let routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages/:name',
    component: MessagesComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  }];

@NgModule({
  imports: [BrowserModule, MaterialModule, BrowserAnimationsModule, HttpModule, FormsModule,
            RouterModule.forRoot(routes, { useHash: true })],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }
