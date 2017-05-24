import { Component} from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector:'new-message',
    template: `
    <md-card class="card">
        <md-card-content>
            <md-input-container>
                <input [(ngModel)]="message.owner" mdInput placeholder="Name">
            </md-input-container>
            <md-input-container>
                <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
            </md-input-container>
            <md-card-actions>
                <button md-button (click)="post()" color="primart">POST</button>
            </md-card-actions>
        </md-card-content>
    </md-card>
    `
})

export class NewMessageComponent{

    // @Output() onPosted = new EventEmitter();

    //messages: any;
    constructor(private webService: WebService) { };
    message = {
        owner: "",
        text: ""
    }
    

    post(){
        this.webService.postMessage(this.message);
        // this.onPosted.emit(this.message);
    }

}