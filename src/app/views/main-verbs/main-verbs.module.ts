import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MainVerbsComponent } from './main-verbs.component';
import { TransitiveVerbsComponent } from './transitive-verbs/transitive-verbs.component';
import { MainVerbsRoutingModule } from './main-verbs-routing.module';


@NgModule({
	imports: [
		CommonModule,
		MainVerbsRoutingModule
	],
	declarations: [
		MainVerbsComponent,
		TransitiveVerbsComponent
	]
})

export class MainVerbsModule {}