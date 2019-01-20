import { Injectable } from '@angular/core';
import { CloneSubject } from './clone-subject';
import { TaskModel } from './models/task-model';
import { of, Observable, timer, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  id = 1;
  readonly initialState: TaskModel[] = [
    { id: 1, buttonText: 'pause', name: 'name', timer: timer(0, 1000) },
  ];
  private db: TaskModel[] = [...this.initialState];
  private state = new BehaviorSubject(this.db);

  public get tasks$(): Observable<TaskModel[]> {
    return this.state.asObservable();
  }
  addTask(tskName: string) {
    const newTask: TaskModel = {
      name: tskName,
      buttonText: 'play_arrow',
      id: this.id += 1,
      timer: timer(0, 1000),
    };
    this.db.push(newTask);
    this.doNext();
  }

  updateTask(evt: TaskModel): void {
    const index = this.db.findIndex(x => x.id === evt.id);
    this.db = this.toggleAllButtonTexts(this.db, index);
    this.doNext();
  }
  private toggleAllButtonTexts(
    tasks: TaskModel[],
    selectedId: number
  ): TaskModel[] {
    tasks.forEach(x => this.inactivateButtons(x));
    this.toggleText(tasks[selectedId]);
    return tasks;
  }
  private inactivateButtons(x: TaskModel): void {
    if (x.buttonText === 'pause') {
      x.buttonText = 'play_arrow';
    }
  }
  private toggleText(x: TaskModel): void {
    if (x.buttonText === 'pause') {
      x.buttonText = 'play_arrow';
    } else {
      x.buttonText = 'pause';
    }
  }

  private doNext() {
    this.state.next(this.db);
  }
}
