import { MessageComponent } from './message/message.component';
import { CircleComponent } from './circle/circle.component';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

    {
        path: 'user',  component: UserComponent
    },
    {
        path: '**' , component: AppComponent
    }
   // {
     //   path: '**',  redirectTo: '/user',  pathMatch: 'full'
   //}

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }