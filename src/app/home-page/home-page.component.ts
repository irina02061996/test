import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CarsService} from '../cars.service';
import {AuthService} from '../auth.service';

interface Car {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'pink'
  ];

  cars: Car[] = [];
  carName = '';
  appTitle;

  constructor(private auth: AuthService,
              private carsService: CarsService) {
  }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Car[]) => {
          this.cars = cars;
        },
        (err: HttpErrorResponse) => {
          alert(err);
        });
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Car) => {
          this.cars.push(car);
        },
        (err: HttpErrorResponse) => {
          alert(err);
        });

    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Car) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => console.log(data));

  }

  deleteCar(car: Car) {

    this.carsService.deleteCar(car)
      .subscribe(data => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

  changeAuthStatus(status: string) {

    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  }
}

