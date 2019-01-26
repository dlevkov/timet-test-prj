import { Injectable, NgZone } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TimerManagerService {
  private timers: {
    id: number;
    subj$: BehaviorSubject<number>;
    isRunning: boolean;
  }[] = [];
  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      this.runTimers();
    });
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
        filter(x => this.timers.findIndex(y => y.isRunning) >= 0),
        tap(() => {
          this.ngZone.run(() => {
            this.timers
              .filter(x => x.isRunning)
              .forEach(subj => subj.subj$.next(subj.subj$.value + 1));
          });
        })
      )
      .subscribe();
  }
}
