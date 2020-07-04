import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {Data} from '@angular/router';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private finishedDate: Data;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event): void {
    console.log(this.finishedDate);
    this.paragraph.innerHTML = this.finishedDate;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event): void {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
