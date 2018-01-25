import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';
import { Inbox, CommonMessage } from '../message/inbox';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser: User;
  @Input()
  users: User[];

  @Output()
  commonMessage: EventEmitter<CommonMessage> = new EventEmitter();
  @Input()
  userMessages: Inbox[];
  commonMessageTemp: CommonMessage;

  constructor(private router: Router, private userService: UserService, private messageService: MessageService) { }

  getUserMessage(emailId: string) {
    this.messageService.getMessageByEmailId(emailId).subscribe(data => {

      this.userMessages = data.json();
      this.commonMessageTemp = new CommonMessage();
      this.commonMessageTemp.reciverEmailId = emailId;
      this.commonMessageTemp.inbox = this.userMessages;
      this.commonMessage.emit(this.commonMessageTemp);

    });
  }
}


