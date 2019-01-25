import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash-es';
export class CloneSubject<T> extends BehaviorSubject<T> {
  public next(obj: T) {
    const cloned = cloneDeep(obj);
    super.next(cloned);
  }
}
