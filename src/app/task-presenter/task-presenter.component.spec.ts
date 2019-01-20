import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPresenterComponent } from './task-presenter.component';
import { MinuteSecondsPipe } from '../minute-seconds.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaskPresenterComponent', () => {
  let component: TaskPresenterComponent;
  let fixture: ComponentFixture<TaskPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskPresenterComponent, MinuteSecondsPipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPresenterComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
