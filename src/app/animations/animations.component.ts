import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],

  animations: [
    trigger('clickedDiv', [
      state('start', style(
        {
          backgroundColor: 'blue',
          width: '150px',
          height: '150px'
        }
      )),
      state('end', style(
        {
          backgroundColor: 'red',
          width: '300px',
          height: '300px'
        }
      )),
      state('active', style(
        {
          backgroundColor: 'orange',
          width: '170px',
          height: '170px'
        }
      )),
      transition('start <=> end', animate('800ms ease-in')),
      transition('start => active', animate(400)),
      transition('active => end', animate(400))
    ])
  ]
})


export class AnimationsComponent implements OnInit {

  clickDivState;

  constructor() {
  }

  ngOnInit() {
    this.clickDivState = 'start';
  }

  changeDivState() {
    this.clickDivState = 'end';
    setTimeout(() => {
      this.clickDivState = 'start';
    }, 3000);
  }

}
