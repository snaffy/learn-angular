import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import { merge } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.css']
})
export class RxTestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const button = document.getElementById('my-button');
    const myObservable = fromEvent(button, 'click');
    const subscription = myObservable.subscribe({
      // on successful emissions
      next: event => console.log(event),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete!')
    });


    // const dataSource = of(1, 2, 3, 4, 5);
    // const s2 = dataSource
    //   .pipe(
    //     // add 1 to each emitted value
    //     map(value => value + 1)
    //   )
    //   // log: 2, 3, 4, 5, 6
    //   .subscribe(value => console.log(value));

    // const first = interval(2500);
    // const second = interval(1000);
    // const example = first.pipe(merge(second));
    // const subscribe = example.subscribe(val => console.log(val));

  }


}
