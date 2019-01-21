import { Injectable } from '@angular/core';
import { CloneSubject } from './clone-subject';
import { TaskModel } from './models/task-model';
import { of, Observable, timer, BehaviorSubject } from 'rxjs';
import { TaskFactoryService } from './task-factory.service';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  readonly initialState: TaskModel[] = [this.taskService.createTask('test1')];
  private state: TaskModel[] = [...this.initialState];
  private logicSubj$ = new BehaviorSubject(this.state);

  constructor(private taskService: TaskFactoryService) {}
  public get tasks$(): Observable<TaskModel[]> {
    return this.logicSubj$.asObservable();
  }
  public addTask(tskName: string) {
    const newTask = this.taskService.createTask(tskName);
    this.state.push(newTask);
    this.doNext();
  }

  public updateTask(evt: TaskModel): void {
    const index = this.state.findIndex(x => x.id === evt.id);
    this.state = this.toggleAllButtonTexts(this.state, index);
    this.doNext();
  }

  public get TotalTime(): Observable<number>{
    return 
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
    this.logicSubj$.next(this.state);
  }
}
