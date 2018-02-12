import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerProvider } from '../../providers/timer/timer';


@Component({
  selector: 'timer-buttons',
  templateUrl: 'timer-buttons.html'
})
export class TimerButtonsComponent implements OnInit, OnDestroy {

  private playPauseStopUnsubscribe: any;
    private play: boolean;

    constructor(private timerService: TimerProvider) {
    }

    ngOnInit() {
        this.playPauseStopUnsubscribe = this.timerService.playPauseStop$.subscribe((res: any) => this.setPlay(res));       
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.timerService.playTimer();
    }

    pauseTimer() {
        this.timerService.pauseTimer();
    }

    stopTimer() {
        this.timerService.stopTimer();
    }

}
