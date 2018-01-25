import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { Circle } from '../circle/circle';
import { CircleService } from '../circle/circle.service';


@Component({
  selector: 'app-circle-modal',
  templateUrl: './circle-modal.component.html',
  styleUrls: ['./circle-modal.component.css']
})
export class CircleModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CircleModalComponent>, private circleService: CircleService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
