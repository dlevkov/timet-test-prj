import {} from '@angular/core/testing';
import { CloneSubject } from './clone-subject';

describe('CloneSubject', () => {
  it('should create', () => {
    const subj = new CloneSubject(null);
    expect(subj).toBeTruthy();
  });
  it('should clone given value', done => {
    expect.hasAssertions();
    const expected = { top: { something: 'something' } };
    const subj = new CloneSubject(undefined);
    subj.next(expected);
    subj.subscribe(actual => {
      expected.top.something = '123';
      expect(actual).not.toEqual(expected);
      done();
    });
  });
});
