import {
  Directive,
  HostBinding,
  HostListener, Input,
  OnInit
} from '@angular/core';


@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input('appBackground') hoverColor: string;
  @Input() defaultColor: string;

  constructor() {
  }

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') background: string;

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }


}
