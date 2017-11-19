import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { MainVerbsComponent } from '../views/main-verbs/main-verbs.component';
import { HelpingVerbsComponent } from '../views/helping-verbs/helping-verbs.component';
import { SpecialVerbsComponent } from '../views/special-verbs/special-verbs.component';
import { RegularVerbsComponent } from '../views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from '../views/irregular-verbs/irregular-verbs.component';
import { VerbToBeComponent } from '../views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from '../views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from '../views/verbs-with-two-objects/verbs-with-two-objects.component';
import { TheImperativeComponent } from '../views/the-imperative/the-imperative.component';
import { CategoryComponent } from '../views/category/category.component';
import { VerbComponent } from '../views/verb/verb.component';


const mainRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'main-verbs',
    component: MainVerbsComponent,
    data: {
      title: 'Main Verbs'
    }
  },
  {
    path: 'helping-verbs',
    component: HelpingVerbsComponent,
    data: {
      title: 'Helping Verbs'
    }
  },
  {
    path: 'special-verbs',
    component: SpecialVerbsComponent,
    data: {
      title: 'Special Verbs'
    }
  },
  {
    path: 'regular-verbs',
    component: RegularVerbsComponent,
    data: {
      title: 'Regular Verbs'
    }
  },
  {
    path: 'irregular-verbs',
    component: IrregularVerbsComponent,
    data: {
      title: 'Irregular Verbs'
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

const childRoutes: Routes = [
  {
    path: 'main-verbs',
    children: [
      {
        path: '',
        redirectTo: 'main-verbs',
        pathMatch: 'full'
      },
      {
        path: 'transitive',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Transitive Verbs'
        }
      },
      {
        path: 'intransitive',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Intransitive Verbs'
        }
      },
      {
        path: 'linking-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Linking Verbs'
        }
      },
      {
        path: 'dynamic-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Dynamic Verbs'
        }
      },
      {
        path: 'static-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Static Verbs'
        }
      },
      {
        path: 'regular-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Regular Verbs'
        }
      },
      {
        path: 'irregular-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Irregular Verbs'
        }
      },
    ]
  },
  {
    path: 'helping-verbs',
    children: [
      {
        path: '',
        redirectTo: 'helping-verbs',
        pathMatch: 'full'
      },
      {
        path: 'primary-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Primary Helping Verbs'
        }
      },
      {
        path: 'modal-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Modal Helping Verbs'
        }
      },
      {
        path: 'semimodal-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Semimodal Helping Verbs'
        }
      },
    ]
  },
  {
    path: 'special-verbs',
    children: [
      {
        path: '',
        redirectTo: 'special-verbs',
        pathMatch: 'full'
      },
      {
        path: 'do-make',
        component: SpecialVerbsComponent,
        data: {
          title: 'Do / Make'
        }
      },
      {
        path: 'going-to',
        component: SpecialVerbsComponent,
        data: {
          title: 'Going To'
        }
      },
      {
        path: 'had-better',
        component: SpecialVerbsComponent,
        data: {
          title: 'Had better'
        }
      },
      {
        path: 'phrasal-verbs',
        component: SpecialVerbsComponent,
        data: {
          title: 'Phrasal Verbs'
        }
      },
      {
        path: 'will-going-to',
        component: SpecialVerbsComponent,
        data: {
          title: 'Will / Going To'
        }
      },
    ]
  }
];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes, { useHash: true });
export const childRouting: ModuleWithProviders = RouterModule.forChild(childRoutes);
