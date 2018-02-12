import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { TimerComponent } from './timer/timer';

@NgModule({
	declarations: [DateComponent,
    TimerComponent],
	imports: [],
	exports: [DateComponent,
    TimerComponent]
})
export class ComponentsModule {}
