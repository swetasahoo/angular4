import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatListModule, MatIconModule, } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { CircleService } from '../circle/circle.service';


@Component({
  selector: 'app-subscribe-circle-modal',
  templateUrl: './subscribe-circle-modal.component.html',
  styleUrls: ['./subscribe-circle-modal.component.css']
})
export class SubscribeCircleModalComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<SubscribeCircleModalComponent>, private circleService: CircleService) { 
    console.log('subcribe modal widnow');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
