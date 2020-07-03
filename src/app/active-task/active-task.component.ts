import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task/task.component';

@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements OnInit {

  @Input()
  activeTask = new Array<Task>();
  @Output()
  finishTask = new EventEmitter<Task>();
  @Output()
  removeTask = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(task: Task): void {
    this.removeTask.emit(task);
  }

  finish(task: Task): void {
    this.finishTask.emit(task);
  }
}
