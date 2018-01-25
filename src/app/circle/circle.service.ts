import { Circle } from './circle';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CircleService {

  constructor(private http: Http) { }

  getAllCircles() {
    return this.http.get('http://localhost:9013/api/circle/allcircles');
  }

  createNewCircle(circle: Circle)
  {

    return this.http.post('http://localhost:9013/api/circle/createCircle', circle);

  }

}
