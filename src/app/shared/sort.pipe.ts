import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../services/task';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((t1, t2) => {
      if (t1.name.toLowerCase() < t2.name.toLowerCase()) {
        return -1;
      }
      if (t1.name.toLowerCase() > t2.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

}
