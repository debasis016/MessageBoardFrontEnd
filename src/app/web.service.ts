import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:63521/api';
  private messageStore: any = [];

  private messageSubject: any = new Subject();

  messages = this.messageSubject.asObservable();

  errorMessageGet = 'There is an error: Get';
  errorMessagePost = 'There is an error: Post';

  constructor(private http: Http, private sb: MdSnackBar) {
    // this.getMessages();
  }
  getMessages(user: string) {
    try {
      user = (user) ? '/' + user : '';
      this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
        this.messageStore = response.json();
        this.messageSubject.next(this.messageStore);
      }, error => {
        this.handleError(this.errorMessageGet);
      });
    }
    };

  async postMessage(message: any) {
    try {
      let response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messageStore.push(response.json());
    } catch (error) {
      this.handleError(this.errorMessagePost);
    }
  }

  private handleError(error: string) {
    console.error(error);
    this.sb.open(error, 'close')
  }
}
