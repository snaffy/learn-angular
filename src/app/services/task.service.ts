import {Injectable} from '@angular/core';

import {TaskEmitterService} from './task-emitter.service';
import {TaskType} from './taskType';
import {Task} from './task';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _activeTask = new Array<Task>();
  private _finishedTasks = new Array<Task>();
  private activeTaskEmitter = new Subject<Array<Task>>();
  private finishedTaskEmitter = new Subject<Array<Task>>();

  constructor(private taskEmitterService: TaskEmitterService) {
    this.subscribeToTaskEmitter();
  }

  public subscribeToTaskEmitter(): void {
    this.taskEmitterService.getSub().subscribe(task => {

      switch (task.type) {
        case TaskType.NEW:
          this.createNewTask(task);
          break;
        case TaskType.TO_REMOVE:
          this.removeTask(task);
          break;
        case TaskType.FINISHED:
          this.finishedTaskEmitter.next(this._finishedTasks);
          this.finishTask(task);
          break;
      }
      this.activeTaskEmitter.next(this._activeTask);
    });
  }

  private createNewTask(task: Task): void {
    this._activeTask.push(task);
  }

  private removeTask(task: Task): void {
    this._activeTask = this._activeTask
      .filter(t => t.id !== task.id);
  }

  private finishTask(task: Task): void {
    this.removeTask(task);
    this._finishedTasks.push(task);
  }

  public getActiveTask(): Observable<Array<Task>> {
    return this.activeTaskEmitter.asObservable();
  }

  public getFinishedTask(): Observable<Array<Task>> {
    return this.finishedTaskEmitter.asObservable();
  }
}

