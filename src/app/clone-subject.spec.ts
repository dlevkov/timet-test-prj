import {} from '@angular/core/testing';
import { CloneSubject } from './clone-subject';
import { TaskModel } from './models/task-model';
import { of } from 'rxjs';

describe('CloneSubject', () => {
  it('should create', () => {
    const subj = new CloneSubject(null);
    expect(subj).toBeTruthy();
  });
  it('should clone given value', done => {
    expect.hasAssertions();
    const expected: TaskModel[] = [
      { id: 1, buttonText: 'pause', name: 'test1', timer: of(0) },
    ];
    const subj = new CloneSubject([undefined]);
    subj.next(expected);
    subj.subscribe(actual => {
      expected[0].name = 'test2';
      expect(actual).not.toEqual(expected);
      done();
    });
  });
});
