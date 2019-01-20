import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPresenterComponent } from './task-presenter.component';

describe('TaskPresenterComponent', () => {
  let component: TaskPresenterComponent;
  let fixture: ComponentFixture<TaskPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
