import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {TaskEmitterService} from '../services/task-emitter.service';
import {Task} from '../services/task';
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements OnInit {

  @Input()
  activeTask = new Array<Task>();

  constructor(private taskEmitterService: TaskEmitterService, private taskService: TaskService) {
    taskService.getActiveTask().subscribe(value => {
      this.activeTask = value.slice();
    });

  }

  ngOnInit(): void {
  }

  remove(task: Task): void {
    this.taskEmitterService.emitRemoveTask(task);
  }

  finish(task: Task): void {
    this.taskEmitterService.emitFinishedTask(task);
  }
}
