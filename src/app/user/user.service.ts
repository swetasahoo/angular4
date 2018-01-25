import { Http } from '@angular/http';
import { User } from './user';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAllUser()
  {
    console.log('all user');
     return this.http.get('http://localhost:9012/api/user/allusers');
  }

}
