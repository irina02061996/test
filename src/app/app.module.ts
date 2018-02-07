import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BackgroundDirective} from './shared/background.directive';
import {PowPipe} from './pipes/pow.pipe';
import {CarFilterPipe} from './pipes/car-filter.pipe';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {CarsService} from './cars.service';
import {HttpClientModule} from '@angular/common/http';
import {ChartPageComponent} from './chart-page/chart-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {ChartService} from './chart.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationsComponent} from './animations/animations.component';


@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    CarFilterPipe,
    ChartPageComponent,
    HomePageComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    CarsService,
    ChartService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
