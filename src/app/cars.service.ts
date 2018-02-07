import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

interface Title {
  value: string;
}

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf8'
  });


  getAppTitle() {
    return this.http
      .get('http://localhost:3000/title')
      .delay(3000)
      .map((data: Title) =>
        data.value
      );
  }


  getCars() {
    return this.http
      .get('http://localhost:3000/cars', {
        headers: this.headers
      })
      .map((response: any) => response)
      .catch((err: HttpErrorResponse) => {
        return Observable.throw('Сервер недоступен');
      });
  }

  addCar(carName: string) {

    const data = {
      name: carName,
      color: 'blue'
    };

    return this.http
      .post('http://localhost:3000/cars', data);
  }

  changeColor(car: any, color: string) {
    car.color = color;

    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }

}
