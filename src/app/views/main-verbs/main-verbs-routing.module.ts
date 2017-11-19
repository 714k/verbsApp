import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainVerbsComponent } from './main-verbs.component';
import { TransitiveVerbsComponent } from './transitive-verbs/transitive-verbs.component';

const mainVerbsRoutes = [
	{
		path: 'main-verbs',
		component: MainVerbsComponent,
		children: [
			{
				path: 'transitive',
				component: TransitiveVerbsComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(mainVerbsRoutes)
	],
	exports: [
		RouterModule
	]
})

export class MainVerbsRoutingModule {}