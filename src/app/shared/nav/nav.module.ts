/*import { NgModule } from '@angular/core';
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

const verbsRoutes: Routes = [
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
        path: 'by-category',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Category'
        }
      }
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
        path: 'by-title',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Title'
        }
      }
    ],
    data: {
      title: 'Irregular Verbs'
    }
  },
  {
    path: 'irregular-verbs/:title',
    component: VerbComponent,
    children: [
      {
        path: 'by-title',
        component: CategoryComponent,
        outlet: 'subnav',
        data: {
          title: 'By Title'
        }
      }
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
];

@NgModule({
  imports: [
  	RouterModule.forChild(verbsRoutes)
  ],
  exports: [RouterModule]
})

export class NavRoutingModule {}*/