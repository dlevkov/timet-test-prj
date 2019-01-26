import { BehaviorSubject } from 'rxjs';
import { TaskModel } from './models/task-model';
export class CloneSubject extends BehaviorSubject<TaskModel[]> {
  /**
   * Clones every prop, but timer
   * in order to keep pointer
   */
  public next(obj: TaskModel[]) {
    const res: TaskModel[] = [];
    obj.forEach(element => {
      const newElem: TaskModel = Object.assign({}, element);
      newElem.timer = element.timer;
      res.push(newElem);
    });
    super.next(res);
  }
}
