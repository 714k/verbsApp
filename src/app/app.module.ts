import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { mainRouting, childRouting } from './core/app.routing';
import { VerbsService } from './shared/services/verbs.service';

import { NavService } from './shared/nav/nav.service';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContentComponent } from './shared/content/content.component';
import { SearchComponent } from './shared/search/search.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SubnavComponent } from './shared/subnav/subnav.component';

import { HomeComponent } from './views/home/home.component';
import { MainVerbsComponent } from './views/main-verbs/main-verbs.component';
import { HelpingVerbsComponent } from './views/helping-verbs/helping-verbs.component';
import { SpecialVerbsComponent } from './views/special-verbs/special-verbs.component';
import { RegularVerbsComponent } from './views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './views/irregular-verbs/irregular-verbs.component';
import { PhrasalVerbsComponent } from './views/phrasal-verbs/phrasal-verbs.component';
import { VerbToBeComponent } from './views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from './views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from './views/verbs-with-two-objects/verbs-with-two-objects.component';
import { StateVerbsDynamicVerbsComponent } from './views/state-verbs-dynamic-verbs/state-verbs-dynamic-verbs.component';
import { TheImperativeComponent } from './views/the-imperative/the-imperative.component';
import { CategoryComponent } from './views/category/category.component';
import { VerbComponent } from './views/verb/verb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    SpinnerComponent,
    HomeComponent,
    MainVerbsComponent,
    HelpingVerbsComponent,
    SpecialVerbsComponent,
    RegularVerbsComponent,
    IrregularVerbsComponent,
    PhrasalVerbsComponent,
    VerbToBeComponent,
    VerbsWithPrepositionsComponent,
    VerbsWithTwoObjectsComponent,
    StateVerbsDynamicVerbsComponent,
    TheImperativeComponent,
    SubnavComponent,
    CategoryComponent,
    VerbComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    mainRouting,
    childRouting
  ],
  providers: [NavService, VerbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
