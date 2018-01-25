import { MessageService } from './message/message.service';
import { CircleService } from './circle/circle.service';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { CircleModalComponent } from './circle-modal/circle-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatInputModule, MatListModule, MatIconModule, } from '@angular/material';
import { SubscribeCircleModalComponent } from './subscribe-circle-modal/subscribe-circle-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CircleComponent,
    MessageComponent,
    CircleModalComponent,
    SubscribeCircleModalComponent
  ],

  imports: [AppRoutingModule,
    BrowserModule, HttpModule, FormsModule, MatDialogModule,
    MatInputModule, MatButtonModule, BrowserAnimationsModule, MatListModule, MatIconModule,

  ],
  entryComponents: [CircleModalComponent, SubscribeCircleModalComponent],
  providers: [UserService, CircleService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
