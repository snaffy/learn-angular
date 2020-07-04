import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {TaskType} from './taskType';
import {Task} from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskEmitterService {
  private sub = new Subject<Task>();

  constructor() {
  }

  public emitNewTask(taskName: string): void {
    if (taskName) {
      this.sub.next(new Task(taskName, TaskType.NEW));
    }
  }

  public emitFinishedTask(task: Task): void {
    task.finish();
    this.sub.next(task);
  }

  public emitRemoveTask(task: Task): void {
    task.markAsToRemove();
    this.sub.next(task);
  }

  public getSub(): Observable<Task> {
    return this.sub.asObservable();
  }
}
