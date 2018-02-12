import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { TimerComponent } from './timer/timer';
import { TimerButtonsComponent } from './timer-buttons/timer-buttons';

@NgModule({
	declarations: [DateComponent,
    TimerComponent,
    TimerButtonsComponent],
	imports: [],
	exports: [DateComponent,
    TimerComponent,
    TimerButtonsComponent],
})
export class ComponentsModule {}
