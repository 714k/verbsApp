import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../shared/nav/nav.component';
import { ContentComponent } from '../shared/content/content.component';
import { SearchComponent } from '../shared/search/search.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    SpinnerComponent
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    SpinnerComponent],
  providers: []
})
export class CoreModule { }
// doesn't work core.module has no exported member 'CoreModule'
