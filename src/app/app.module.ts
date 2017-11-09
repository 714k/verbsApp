import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { NavService } from './nav/nav.service';
import { NavRoutingModule } from './nav/nav.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './views/home/home.component';
import { RegularVerbsComponent } from './views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './views/irregular-verbs/irregular-verbs.component';
import { PhrasalVerbsComponent } from './views/phrasal-verbs/phrasal-verbs.component';
import { VerbToBeComponent } from './views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from './views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from './views/verbs-with-two-objects/verbs-with-two-objects.component';
import { StateVerbsDynamicVerbsComponent } from './views/state-verbs-dynamic-verbs/state-verbs-dynamic-verbs.component';
import { TheImperativeComponent } from './views/the-imperative/the-imperative.component';
import { SubnavComponent } from './subnav/subnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    SpinnerComponent,
    HomeComponent,
    RegularVerbsComponent,
    IrregularVerbsComponent,
    PhrasalVerbsComponent,
    VerbToBeComponent,
    VerbsWithPrepositionsComponent,
    VerbsWithTwoObjectsComponent,
    StateVerbsDynamicVerbsComponent,
    TheImperativeComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule,
    NavRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
