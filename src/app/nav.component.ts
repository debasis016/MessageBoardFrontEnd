import { Component, NgZone, OnInit } from '@angular/core';


@Component({
    selector: 'nav',
    template: `
    <md-toolbar color="primary">
        Message Board
        <button md-button routerLink="/">Home</button>
        <button md-button routerLink="/messages">Messages</button>
    </md-toolbar>
    `
})

export class NavComponent{

}
