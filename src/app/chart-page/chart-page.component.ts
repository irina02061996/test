import {Component, OnChanges, OnInit} from '@angular/core';
import {ChartService} from '../chart.service';
import {Chart} from 'chart.js';
import {HttpErrorResponse} from '@angular/common/http';
import {DataChart} from './DataChart';


@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  chart: Chart = [];

  valuesX: number[] = [];
  valuesY: number[] = [];

  chartData: DataChart;

  countDatasets;
  datasets: DataChart[] = [];

// носитель
  a;
  d;

// ядро
  b;
  c;

  // интервал значений
  start;
  end;
  countStep;

  constructor(private chartService: ChartService) {
  }


  ngOnInit() {
  }

  initChart() {

    this.valuesX = [];
    this.valuesY = [];

    const step = +((this.end - this.start) / this.countStep).toFixed(1);
    console.log(step);

    let x = +this.start;
    this.valuesX.push(x);

    for (let i = 1; i < this.countStep - 1; i++) {
      x = +(x + step).toFixed(1);
      this.valuesX.push(x);
    }

    x = +(x + step).toFixed(1);
    if (x < +this.end) {
      this.valuesX.push(x);
    }

    this.valuesX.push(+this.end);


    this.initData(); // иницилизация начального графика

    this.countDatasets = 0;
    this.datasets[this.countDatasets] = this.chartData;

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.valuesX,
        datasets: this.datasets
      },
      options: {
        legend: {
          display: true
        }
        // ,
        // scales: {
        //   xAxes: [{
        //     ticks: {
        //       min: 2
        //     }
        //   }]
        // }
      }
    });
  }

  initData() {

    const middle = Math.round((this.valuesX.length - 1) / 2);

    this.a = this.valuesX[1];
    this.b = this.valuesX[middle];
    this.c = this.valuesX[middle];
    this.d = this.valuesX[this.valuesX.length - 2];

    this.valuesY = [];
    this.getValuesY(this.valuesX, this.valuesY);

    this.chartData = {
      label: 'First',
      data: this.valuesY,
      backgroundColor: 'rgba(100, 162, 100, 0.5)',
      fill: true
    };
  }

  updateData(value, type) {

    switch (type) {
      case 'a': {
        this.a = value;
        break;
      }
      case 'b': {
        this.b = value;
        break;
      }
      case 'c': {
        this.c = value;
        break;
      }
      case 'd': {
        this.d = value;
        break;
      }
    }

    this.valuesY = [];
    this.getValuesY(this.valuesX, this.valuesY);
    this.chartData.data = this.valuesY;

    this.updateChart();
  }


  addData() {
    this.countDatasets++;
    this.initData(); // инициализация начального графика
    this.updateChart();
  }


  updateChart() {
    this.datasets[this.countDatasets] = this.chartData;
    this.chart.config.data.datasets = this.datasets;
    this.chart.update();
  }

// Сохраняем готовый chart с добавленными данными - графиками ->
// после чего - находим решение
  addChart() {

    // this.chartService
    //   .addChart(this.chartData)
    //   .subscribe((chart: DataChart) => {
    //       console.log(chart);
    //       this.datasets.push(chart);
    //       this.chart.config.data.datasets = this.datasets;
    //       this.chart.update();
    //     },
    //     (err: HttpErrorResponse) => {
    //       alert(err);
    //     });

    this.valuesY = [];

    this.a = '';
    this.b = '';
    this.c = '';
    this.d = '';
  }

  getValuesY(valX, valY) {

    let x;
    for (let i = 0; i < valX.length; i++) {
      x = valX[i];

      if (x < this.a || x > this.d) {
        valY.push(null);
      }

      if (x >= this.a && x < this.b) {
        valY.push((x - this.a) / (this.b - this.a));
      }

      if (x >= this.b && x <= this.c) {
        valY.push(1);
      }

      if (x > this.c && x <= this.d) {
        valY.push((this.d - x) / (this.d - this.c));
      }
    }
  }

  resetChart() {
    this.datasets = [];
    this.chart.config.data.datasets = [];
    this.chart.update();
  }

}

