import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63521/api';
    messages: any = [];
    errorMessageGet = 'There is an error: Get';
    errorMessagePost = 'There is an error: Post';
    constructor(private http: Http, private sb: MdSnackBar) {
        this.getMessages();
    }
    async getMessages(user) {
        try {
            user = (user) ? '/' + user : '';
            let response = await this.http.get(this.BASE_URL + '/messages' + user).toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError(this.errorMessageGet);
        }
    };

    async postMessage(message: any) {
        try {
            let response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError(this.errorMessagePost);
        }
    }

    private handleError(error: string) {
        console.error(error);
        this.sb.open(error, 'close')
    }
}
