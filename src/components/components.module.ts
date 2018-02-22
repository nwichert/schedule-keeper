import { NgModule } from '@angular/core';
import { DateComponent } from './date/date';
import { BottleFormComponent } from './bottle-form/bottle-form';
import { MotherFormComponent } from './mother-form/mother-form';

@NgModule({
	declarations: [DateComponent,
    BottleFormComponent,
    MotherFormComponent],
	imports: [],
	exports: [DateComponent,
    BottleFormComponent,
    MotherFormComponent],
})
export class ComponentsModule {}
