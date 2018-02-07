import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartPageComponent} from './chart-page/chart-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard} from './auth-guard.service';
import {AnimationsComponent} from './animations/animations.component';


const appRouts: Routes = [
  // { path: 'chart', component: ChartPageComponent, canActivate: [AuthGuard] },
   { path: 'chart', component: ChartPageComponent },
  { path: 'animations', component: AnimationsComponent},
  { path: '', component: HomePageComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
