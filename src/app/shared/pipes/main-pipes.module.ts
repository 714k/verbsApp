import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SortByTitle, Capitalize } from '../../shared/pipes/sort-by.pipe';

@NgModule({
  declarations:[
    SortByTitle,
    Capitalize
  ],
  imports:[
    CommonModule
  ],
  exports:[
    SortByTitle,
    Capitalize
  ]
})

export class MainPipes{}