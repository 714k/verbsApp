import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SortByTitle } from '../../shared/pipes/sort-by.pipe';

@NgModule({
  declarations:[
  	SortByTitle
  ],
  imports:[
  	CommonModule
  ],
  exports:[
  	SortByTitle
  ]
})

export class MainPipes{}