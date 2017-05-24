import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav.component';

@Component({
  selector: 'my-app',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {

  // @ViewChild(MessagesComponent) messages: MessagesComponent;

  // onPosted(message){
  //   this.messages.messages.push(message);
  // }

}
