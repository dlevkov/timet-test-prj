import { BehaviorSubject } from 'rxjs';
import { deepClone } from 'lodash-es';
export class CloneSubject<T> extends BehaviorSubject<T> {
  public next(obj: T) {
    super.next(deepClone(obj));
  }
}
