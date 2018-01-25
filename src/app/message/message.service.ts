import { Injectable } from '@angular/core';
import { Inbox } from './inbox';

import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
@Injectable()
export class MessageService {


  getAllMessages() {
    return this.http.get('http://localhost:9020/api/message/getAllMessage');
  }

  getMessageByCircleName(circleName: string) {
    return this.http.get('http://localhost:9020/api/message/getAllMessagesByCircleName/' + circleName);
  }


  sendMessageToUser(messageEntered: Inbox) {
    return this.http.post('http://localhost:9020/api/message/sendMessage', messageEntered);
  }
  getMessageByEmailId(emailId: string) {

    return this.http.get('http://localhost:9020/api/message/getMessagesfromUser/' + emailId + '.');
  }

  sendMessageToCircle(messageEntered: Inbox) {
    return this.http.post('http://localhost:9020/api/message/sendMessage', messageEntered);
  }
  constructor(private http: Http) { }

}

