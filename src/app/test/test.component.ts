import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  days = ['P', 'W', 'S', 'CZ', 'PT', 'SOB', 'N'];
  dogs = Array<Dog>();
  isHidden = true;
  inputText = '';
  inputTest2Way = '';


  constructor() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Lulek 5', 5));
  }

  ngOnInit(): void {
  }

  addDogs(): void {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Lulek 5', 5));
  }

  removeDogs(): void {
    this.dogs = Array<Dog>();
  }

  click(event: MouseEvent): void {

  }
}

class Dog {
  name;
  age;


  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
