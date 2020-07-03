import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css']
})
export class BindingTestComponent implements OnInit {
  colorClass = 'color';
  logoUrl = '';
  maxLength = 5;
  inputText = '';
  isDisabled = false;
  twoWayInput = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  change(): void {
    this.colorClass = 'color2';
  }
}
