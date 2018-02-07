import {Injectable} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {DataChart} from './chart-page/DataChart';


@Injectable()
export class ChartService {
  constructor(private http: HttpClient) {
  }

  addChart(chart: DataChart) {

    return this.http
      .post('http://localhost:3000/chart', chart);
  }

}
