import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { BottleFormComponent } from './bottle-form/bottle-form';
import { MotherFormComponent } from './mother-form/mother-form';
import { StopwatchComponent } from './stopwatch/stopwatch';
import { StopwatchButtonsComponent } from './stopwatch-buttons/stopwatch-buttons';
import { WetDiaperComponent } from './wet-diaper/wet-diaper';
import { DirtyDiaperComponent } from './dirty-diaper/dirty-diaper';
import { HeaderMenuComponent } from './header-menu/header-menu';

@NgModule({
	declarations: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent,
    WetDiaperComponent,
    DirtyDiaperComponent,
    HeaderMenuComponent],
	imports: [],
	exports: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    StopwatchComponent,
    StopwatchButtonsComponent,
    WetDiaperComponent,
    DirtyDiaperComponent,
    HeaderMenuComponent],
})
export class ComponentsModule {}
