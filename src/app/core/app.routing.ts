import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { RegularVerbsComponent } from '../views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from '../views/irregular-verbs/irregular-verbs.component';
import { PhrasalVerbsComponent } from '../views/phrasal-verbs/phrasal-verbs.component';
import { VerbToBeComponent } from '../views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from '../views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from '../views/verbs-with-two-objects/verbs-with-two-objects.component';
import { StateVerbsDynamicVerbsComponent } from '../views/state-verbs-dynamic-verbs/state-verbs-dynamic-verbs.component';
import { TheImperativeComponent } from '../views/the-imperative/the-imperative.component';
import { CategoryComponent } from '../views/category/category.component';
import { VerbComponent } from '../views/verb/verb.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'regular-verbs',
    component: RegularVerbsComponent,
    children: [
      {
        path: 'regular-verbs/by-category',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Category',
          parent: 'Regular Verbs'
        }
      },
      {
        path: 'regular-verbs/by-type',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Type',
          parent: 'Regular Verbs'
        }
      },
      {
        path: 'regular-verbs/by-memory',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Memory',
          parent: 'Regular Verbs'
        }
      },
    ],
    data: {
      title: 'Regular Verbs'
    }
  },
  {
    path: 'irregular-verbs',
    component: IrregularVerbsComponent,
    children: [
      {
        path: 'irregular-verbs/by-category',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Category',
          parent: 'Irregular Verbs'
        }
      },
      {
        path: 'irregular-verbs/by-type',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Type',
          parent: 'Irregular Verbs'
        }
      },
      {
        path: 'irregular-verbs/by-memory',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Memory',
          parent: 'Irregular Verbs'
        }
      },
    ],
    data: {
      title: 'Irregular Verbs'
    }
  },
  {
    path: 'phrasal-verbs',
    component: PhrasalVerbsComponent,
    data: {
      title: 'Phrasal Verbs'
    }
  },
  {
    path: 'verb-to-be',
    component: VerbToBeComponent,
    data: {
      title: 'Verb To Be'
    }
  },
  {
    path: 'verbs-with-prepositions',
    component: VerbsWithPrepositionsComponent,
    data: {
      title: 'Verbs With Prepositions'
    }
  },
  {
    path: 'verbs-with-two-objects',
    component: VerbsWithTwoObjectsComponent,
    data: {
      title: 'Verbs With To Objects'
    }
  },
  {
    path: 'state-verbs-dynamic-verbs',
    component: StateVerbsDynamicVerbsComponent,
    data: {
      title: 'State Verbs / Dynamic Verbs'
    }
  },
  {
    path: 'the-imperative',
    component: TheImperativeComponent,
    data: {
      title: 'The Imperative'
    }
  },
  {
  	path: '**', 
  	redirectTo: 'home'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });