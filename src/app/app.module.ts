import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './core/app.routing';

import { NavService } from './shared/nav/nav.service';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContentComponent } from './shared/content/content.component';
import { SearchComponent } from './shared/search/search.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SubnavComponent } from './shared/subnav/subnav.component';

import { HomeComponent } from './views/home/home.component';

import { MainVerbsComponent } from './views/main-verbs/main-verbs.component';
import { TransitiveVerbsComponent } from './views/main-verbs/transitive-verbs/transitive-verbs.component';
import { IntransitiveVerbsComponent } from './views/main-verbs/intransitive-verbs/intransitive-verbs.component';
import { LinkingVerbsComponent } from './views/main-verbs/linking-verbs/linking-verbs.component';
import { DynamicVerbsComponent } from './views/main-verbs/dynamic-verbs/dynamic-verbs.component';
import { StaticVerbsComponent } from './views/main-verbs/static-verbs/static-verbs.component';

import { HelpingVerbsComponent } from './views/helping-verbs/helping-verbs.component';
import { PrimaryHelpingVerbsComponent } from './views/helping-verbs/primary-helping-verbs/primary-helping-verbs.component';
import { ModalHelpingVerbsComponent } from './views/helping-verbs/modal-helping-verbs/modal-helping-verbs.component';
import { SemiModalHelpingVerbsComponent } from './views/helping-verbs/semi-modal-helping-verbs/semi-modal-helping-verbs.component';

import { SpecialVerbsComponent } from './views/special-verbs/special-verbs.component';
import { DoMakeVerbsComponent } from './views/special-verbs/do-make-verbs/do-make-verbs.component';
import { GoingToVerbsComponent } from './views/special-verbs/going-to-verbs/going-to-verbs.component';
import { HadBetterVerbsComponent } from './views/special-verbs/had-better-verbs/had-better-verbs.component';
import { PhrasalVerbsComponent } from './views/special-verbs/phrasal-verbs/phrasal-verbs.component';
import { WillGoingToVerbsComponent } from './views/special-verbs/will-going-to-verbs/will-going-to-verbs.component';

import { RegularVerbsComponent } from './views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './views/irregular-verbs/irregular-verbs.component';
import { VerbToBeComponent } from './views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from './views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from './views/verbs-with-two-objects/verbs-with-two-objects.component';
import { TheImperativeComponent } from './views/the-imperative/the-imperative.component';

import { CategoryComponent } from './views/category/category.component';
import { VerbComponent } from './views/verb/verb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SubnavComponent,
    ContentComponent,
    SearchComponent,
    SpinnerComponent,

    HomeComponent,
    MainVerbsComponent,
    TransitiveVerbsComponent,
    IntransitiveVerbsComponent,
    LinkingVerbsComponent,
    DynamicVerbsComponent,
    StaticVerbsComponent,

    HelpingVerbsComponent,
    PrimaryHelpingVerbsComponent,
    ModalHelpingVerbsComponent,
    SemiModalHelpingVerbsComponent,

    SpecialVerbsComponent,
    DoMakeVerbsComponent,
    GoingToVerbsComponent,
    HadBetterVerbsComponent,
    PhrasalVerbsComponent,
    WillGoingToVerbsComponent,

    RegularVerbsComponent,
    IrregularVerbsComponent,
    VerbToBeComponent,
    VerbsWithPrepositionsComponent,
    VerbsWithTwoObjectsComponent,
    TheImperativeComponent,

    CategoryComponent,
    VerbComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
