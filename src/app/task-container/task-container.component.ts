import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task-model';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  public tasks$: Observable<TaskModel[]>;
  constructor(private service: LogicService) {}

  ngOnInit() {
    this.tasks$ = this.service.tasks$;
  }

  public onClick(evt: TaskModel) {
    this.service.updateTask(evt);
  }
}
