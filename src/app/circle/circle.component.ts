import { CircleService } from './circle.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Inbox, CommonMessage } from '../message/inbox';
import { Circle } from './circle';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog, MatDrawerToggleResult } from '@angular/material';
import { CircleModalComponent } from '../circle-modal/circle-modal.component';
import { MatDialogRef } from '@angular/material';
import { SubscribeCircleModalComponent } from '../subscribe-circle-modal/subscribe-circle-modal.component';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  selectedCircle: Circle;

  @Input()
  circles: Circle[];

  @Output()
  commonMessage: EventEmitter<CommonMessage> = new EventEmitter();
  commonMessageTemp: CommonMessage;
  @Input()
  circleMessages: Inbox[];
  newCircleName: string;
  newCircle: Circle;
  status: string;

  constructor(private router: Router, private circleService: CircleService, private messageService: MessageService,
    public dialog: MatDialog) { }

  openDialog(): void {
    console.log('open dialog box');
    const dialogRef = this.dialog.open(CircleModalComponent, {
      width: '0', height: '0',
      data: { newCircleName: this.newCircleName }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.newCircle = new Circle();
        this.newCircle.circleName = result;
        this.newCircle.createdBy = 'sweta@niit.com';
        this.circleService.createNewCircle(this.newCircle).subscribe(data => {
          this.status = data.json();
          console.log('data', data.status);
          if (data.status === 200) {
            this.circleService.getAllCircles().subscribe(response =>
              this.circles = response.json());
          }
        });
      }

    });
  }

  openNewDialog(): void {

    console.log('open modal');
    const dialogRef = this.dialog.open(SubscribeCircleModalComponent, {
      width: '0', height: '0'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  getCircleMessage(circleName: string) {
    this.messageService.getMessageByCircleName(circleName).subscribe(data => {

      this.circleMessages = data.json();
      this.commonMessageTemp = new CommonMessage();
      this.commonMessageTemp.circleName = circleName;
      this.commonMessageTemp.inbox = this.circleMessages;
      this.commonMessage.emit(this.commonMessageTemp);


    });

  }
}
