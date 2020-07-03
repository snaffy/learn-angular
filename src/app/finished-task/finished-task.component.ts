import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task/task.component';

@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {
  @Input()
  finishedTasks = new Array<Task>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
