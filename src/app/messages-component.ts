import { Component, NgZone, OnInit } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'message',
    template: `
    <div *ngFor='let message of webService.messages | async'>
        <md-card class="card">
            <md-card-title [routerLink]="['/messages',message.owner]" style="cursor: pointer">By: {{message.owner}}</md-card-title>
            <md-card-content>Message:{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})

export class MessagesComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) {}
      ngOnInit() {
        let name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        // this.webService.messages.subscribe(messages => {
        //   this.messages = messages
        // });
        this.webService.getUser().subscribe();
      };
};
