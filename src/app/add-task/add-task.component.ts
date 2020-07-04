import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskEmitterService} from '../services/task-emitter.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask = '';

  constructor(private taskEmitterService: TaskEmitterService) {
  }

  ngOnInit(): void {
  }

  addNewTask(): void {
    this.taskEmitterService.emitNewTask(this.newTask);
    this.newTask = '';
  }

}
