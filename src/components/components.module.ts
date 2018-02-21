import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { BottleFormComponent } from './bottle-form/bottle-form';
import { MotherFormComponent } from './mother-form/mother-form';
import { JournalComponent } from './journal/journal';

@NgModule({
	declarations: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    JournalComponent],
	imports: [],
	exports: [DateComponent,
    BottleFormComponent,
    MotherFormComponent,
    JournalComponent],
})
export class ComponentsModule {}
