import { Component, OnInit, OnDestroy } from '@angular/core';
import { StopwatchProvider } from '../../providers/stopwatch/stopwatch';

@Component({
  selector: 'stopwatch-buttons',
  template: `
    <div id="button-wrap">
      <ion-grid>
        <ion-row class="button-controls">
          <ion-col>
            <button
              class="play"
              ion-button icon-only round
              [disabled]="play" (click)="playTimer()">
                <ion-icon name="play"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
        <ion-row class="button-controls">
          <ion-col>
            <button
              class="pause"
              ion-button icon-only round 
              [disabled]="!play" (click)="pauseTimer()">
                <ion-icon name="pause"></ion-icon>
            </button>
            <button 
              class="stop"
              ion-button icon-only round 
              (click)="stopTimer()">
                <ion-icon name="square"></ion-icon>
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  `,
  styles: [`
      div {
          text-align: center;
      }
  `]
})

export class StopwatchButtonsComponent implements OnInit, OnDestroy {

  private playPauseStopUnsubscribe: any;
    private play: boolean;

    constructor(private StopwatchProvider: StopwatchProvider) {
    }

    ngOnInit() {
        this.playPauseStopUnsubscribe = this.StopwatchProvider.playPauseStop$.subscribe((res: any) => this.setPlay(res));       
    }

    ngOnDestroy() {
        this.playPauseStopUnsubscribe.unsubscribe();
    }

    private setPlay(res: any) {
        (res.play) ? this.play = true : this.play = false;
    }

    playTimer() {
        this.StopwatchProvider.playTimer();
    }

    pauseTimer() {
        this.StopwatchProvider.pauseTimer();
    }

    stopTimer() {
        this.StopwatchProvider.stopTimer();
    }

}