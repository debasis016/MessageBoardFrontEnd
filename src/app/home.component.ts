import { Component } from '@angular/core';
import { MessagesComponent } from './messages-component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewMessageComponent } from './new-message.component';


@Component({
  selector: 'home',
  template: `
    <new-message></new-message>
    <message><\message>
  `,
})
export class HomeComponent  {

}
