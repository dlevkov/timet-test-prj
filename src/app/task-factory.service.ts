import { Injectable } from '@angular/core';
import { TaskModel } from './models/task-model';
import { TimerManagerService } from './timer-manager.service';

@Injectable({
  providedIn: 'root',
})
export class TaskFactoryService {
  private counter = 0;
  constructor(private timersService: TimerManagerService) {}

  createTask(name: string): TaskModel {
    const task: TaskModel = {
      id: this.counter,
      buttonText: 'play_arrow',
      name: name,
      timer: this.timersService.getTimer(this.counter),
    };
    this.incrementCounter();
    return task;
  }

  private incrementCounter() {
    this.counter += 1;
  }
}
