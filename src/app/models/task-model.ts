import { Observable } from 'rxjs';
import { buttonText } from './button-text';

export class TaskModel {
  id: number;
  name: string;
  timer: Observable<number>;
  buttonText: buttonText;
}
