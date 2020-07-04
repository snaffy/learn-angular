import {Directive, HostListener, Input} from '@angular/core';
import {Data} from '@angular/router';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private finishedDate: Data;

  constructor() {
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event): void {
    console.log(this.finishedDate);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event): void {
    console.log(this.finishedDate);
  }
}
