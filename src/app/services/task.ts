import {TaskType} from './taskType';

export class Task {
  private _id;
  private _name;
  private _type: TaskType;
  private _creationDate: Date;
  private _finishedDate: Date;

  constructor(name, taskType: TaskType) {
    this._id = new Date().getUTCMilliseconds();
    this._name = name;
    this._type = taskType;
    this._creationDate = new Date();
  }

  finish(): void {
    this._type = TaskType.FINISHED;
    this._finishedDate = new Date();
  }

  markAsToRemove(): void {
    this._type = TaskType.TO_REMOVE;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type(): TaskType {
    return this._type;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  get finishedDate(): Date {
    return this._finishedDate;
  }
}
