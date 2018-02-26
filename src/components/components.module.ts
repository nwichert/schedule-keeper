import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { BottleFormComponent } from './bottle-form/bottle-form';
import { MotherFormComponent } from './mother-form/mother-form';
import { StopwatchComponent } from './stopwatch/stopwatch';
import { StopwatchButtonsComponent } from './stopwatch-buttons/stopwatch-buttons';

@NgModule({
	declarations: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent],
	imports: [],
	exports: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent],
})
export class ComponentsModule {}
