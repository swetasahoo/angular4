import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CircleService } from './circle/circle.service';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { Circle } from './circle/circle';
import { Inbox } from './message/inbox';
import { CommonMessage } from './message/inbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Activity Stream';
  users: User[] = [];
  circles: Circle[]= [];

  @Input()
  commonMessage: CommonMessage;

  constructor(private circleService: CircleService, private userService: UserService) { }

  getAllCircles() {
    this.circleService.getAllCircles().subscribe(data => this.circles = data.json());
  }
  getAllUsers() {

    this.userService.getAllUser().subscribe(data =>
       this.users = data.json());
  }

  onMessages(commonMessage: CommonMessage)
  {
    this.commonMessage = commonMessage;
  }

  ngOnInit() {
    console.log('init method');

    this.getAllCircles();
    this.getAllUsers();
console.log('call user and cirlce');
  }

}
