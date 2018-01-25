import { Inbox, CommonMessage } from './inbox';
import { MessageService } from './message.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Circle } from '../circle/circle';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() circle: Circle;
  @Input() commonMessage: CommonMessage;

  enteredMessage: string;
  newMessage: string;
  inboxMessage: Inbox;
  status: string;


  constructor(private router: Router, private messageService: MessageService) { }
  sendMessage(event) {
    if (event.keyCode === 13) {

      this.newMessage = event.target.value;
      this.inboxMessage = new Inbox();
      this.inboxMessage.textMessage = this.newMessage;
      this.inboxMessage.reciverEmailId = this.commonMessage.reciverEmailId;
      this.inboxMessage.circleName = this.commonMessage.circleName;
      this.inboxMessage.senderEmailId = 'sweta@gmail.com';
      this.inboxMessage.messageDate = new Date();
      this.commonMessage.inbox.push(this.inboxMessage);
      this.postMessagesToUser(this.inboxMessage);
      this.enteredMessage = ' ';
    }
  }

  private postMessagesToUser(message: Inbox) {
    this.messageService.sendMessageToUser(message).subscribe(data => {
      this.status = data.json();
  });
}


  ngOnInit() {}


}
