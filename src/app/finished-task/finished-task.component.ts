import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../services/task';
import {TaskService} from "../services/task.service";


@Component({
  selector: 'app-finished-task',
  templateUrl: './finished-task.component.html',
  styleUrls: ['./finished-task.component.css']
})
export class FinishedTaskComponent implements OnInit {
  @Input()
  finishedTasks = new Array<Task>();

  constructor(private taskService: TaskService) {
    taskService.getFinishedTask().subscribe(value => this.finishedTasks = value);
  }

  ngOnInit(): void {
  }

}
