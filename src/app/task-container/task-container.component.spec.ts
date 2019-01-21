import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskContainerComponent } from './task-container.component';
import { LogicService } from '../logic.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MinuteSecondsPipe } from '../minute-seconds.pipe';

describe('TaskContainerComponent', () => {
  let component: TaskContainerComponent;
  let fixture: ComponentFixture<TaskContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskContainerComponent, MinuteSecondsPipe],
      providers: [{ provide: LogicService, useValue: jest.fn() }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskContainerComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
