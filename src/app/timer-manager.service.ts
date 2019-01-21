import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TimerManagerService {
  private timers: {
    id: number;
    subj$: BehaviorSubject<number>;
    isRunning: boolean;
  }[] = [];
  constructor() {
    this.runTimers();
  }

  getTimer(id: number): Observable<any> {
    const newTimer = this.createTimer();
    this.timers.push({ id, subj$: newTimer, isRunning: false });
    return newTimer.asObservable();
  }
  private createTimer() {
    return new BehaviorSubject<number>(0);
  }
  public playTimer(id: number): void {
    this.timers.find(x => x.id === id).isRunning = true;
  }
  public pauseTimer(id: number): void {
    this.timers.find(x => x.id === id).isRunning = false;
  }

  private runTimers(): void {
    timer(0, 1000)
      .pipe(
        tap(() =>
          this.timers
            .filter(x => x.isRunning)
            .forEach(subj => subj.subj$.next(subj.subj$.value + 1))
        )
      )
      .subscribe();
  }
}
