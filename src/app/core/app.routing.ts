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


const routes: Routes = [
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
    },
    children: [
      {
        path: 'main-verbs/transitive',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Transitive Verbs'
        }
      },
      {
        path: 'main-verbs/intransitive',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Intransitive Verbs'
        }
      },
      {
        path: 'main-verbs/linking-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Linking Verbs'
        }
      },
      {
        path: 'main-verbs/dynamic-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Dynamic Verbs'
        }
      },
      {
        path: 'main-verbs/static-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Static Verbs'
        }
      },
      {
        path: 'main-verbs/regular-verbs',
        component: MainVerbsComponent,
        outlet: 'context-menu',
        data: {
          title: 'Regular Verbs'
        }
      },
      {
        path: 'main-verbs/irregular-verbs',
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
    component: HelpingVerbsComponent,
    data: {
      title: 'Helping Verbs'
    },
    children: [
      {
        path: 'helping-verbs/primary-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Primary Helping Verbs'
        }
      },
      {
        path: 'helping-verbs/modal-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Modal Helping Verbs'
        }
      },
      {
        path: 'helping-verbs/semimodal-helping-verbs',
        component: HelpingVerbsComponent,
        data: {
          title: 'Semimodal Helping Verbs'
        }
      },
    ]
  },
  {
    path: 'special-verbs',
    component: SpecialVerbsComponent,
    data: {
      title: 'Special Verbs'
    },
    children: [
      {
        path: 'special-verbs/do-make',
        component: SpecialVerbsComponent,
        data: {
          title: 'Do / Make'
        }
      },
      {
        path: 'special-verbs/going-to',
        component: SpecialVerbsComponent,
        data: {
          title: 'Going To'
        }
      },
      {
        path: 'special-verbs/had-better',
        component: SpecialVerbsComponent,
        data: {
          title: 'Had better'
        }
      },
      {
        path: 'special-verbs/phrasal-verbs',
        component: SpecialVerbsComponent,
        data: {
          title: 'Phrasal Verbs'
        }
      },
      {
        path: 'special-verbs/will-going-to',
        component: SpecialVerbsComponent,
        data: {
          title: 'Will / Going To'
        }
      },
    ]
  },
  {
    path: 'regular-verbs',
    component: RegularVerbsComponent,
    data: {
      title: 'Regular Verbs'
    },
  },
  {
    path: 'irregular-verbs',
    component: IrregularVerbsComponent,
    data: {
      title: 'Irregular Verbs'
    },
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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
