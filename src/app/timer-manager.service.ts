import { Injectable } from '@angular/core';
import {
  Observable,
  timer,
  BehaviorSubject,
} from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TimerManagerService {
  private timers = new Map<number, BehaviorSubject<number>>();
  constructor() {
    this.runTimers();
  }

  getTimer(id: number): Observable<any> {
    const newTimer = this.createTimer();
    this.timers.set(id, newTimer);
    return this.timers.get(id).asObservable();
  }
  private createTimer() {
    return new BehaviorSubject<number>(0);
  }
  public playTimer(): void {}
  public pauseTimer(): void {}

  private runTimers(): void {
    timer(0, 1000)
      .pipe(tap(() => this.timers.forEach(t => t.next(t.value + 1))))
      .subscribe();
  }
}
