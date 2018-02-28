import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { BottleFormComponent } from './bottle-form/bottle-form';
import { MotherFormComponent } from './mother-form/mother-form';
import { StopwatchComponent } from './stopwatch/stopwatch';
import { StopwatchButtonsComponent } from './stopwatch-buttons/stopwatch-buttons';
import { WetDiaperComponent } from './wet-diaper/wet-diaper';
import { DirtyDiaperComponent } from './dirty-diaper/dirty-diaper';

@NgModule({
	declarations: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent,
    WetDiaperComponent,
    DirtyDiaperComponent],
	imports: [],
	exports: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent,
    WetDiaperComponent,
    DirtyDiaperComponent],
})
export class ComponentsModule {}
