import { Injectable } from '@angular/core';
import { CloneSubject } from './clone-subject';
import { TaskModel } from './models/task-model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  readonly initialState: TaskModel[] = [
    { id: 1, buttonText: 'pause', name: 'name', timer: of(1) },
  ];
  private db: TaskModel[] = [...this.initialState];
  private state = new CloneSubject(this.db);

  public get tasks$(): Observable<TaskModel[]> {
    return this.state.asObservable();
  }
  addTask(tsk: TaskModel) {
    this.db.push(tsk);
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
    tasks.forEach(x => this.toggleText(x));
    tasks[selectedId].buttonText = selectedTask.buttonText;
    return tasks;
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
