import { NgModule } from '@angular/core';
import { OrderByDateCreatedPipe } from './order-by-date-created/order-by-date-created';

@NgModule({
	declarations: [OrderByDateCreatedPipe],
	imports: [],
	exports: [OrderByDateCreatedPipe]
})
export class PipesModule {}
