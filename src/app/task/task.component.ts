import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  activeTask = new Array<Task>();
  finishedTasks = new Array<Task>();


  ngOnInit(): void {
  }

  constructor() {
  }

  addNewTask(taskName: string): void {
    if (taskName) {
      this.activeTask.push(new Task(taskName));
    }
  }

  removeTask(task: Task): void {
    this.activeTask = this.activeTask.filter(t => t.id !== task.id);
  }

  finish(task: Task): void {
    this.removeTask(task);
    this.finishedTasks.push(task);
  }
}

export class Task {
  id;
  name;
  isFinished;


  constructor(name) {
    this.id = new Date().getUTCMilliseconds();
    this.name = name;
    this.isFinished = false;
  }

  finish(): void {
    this.isFinished = true;
  }
}
