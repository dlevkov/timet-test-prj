import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash-es';
export class CloneSubject<T> extends BehaviorSubject<T> {
  public next(obj: T) {
    super.next(cloneDeep(obj));
  }
}
