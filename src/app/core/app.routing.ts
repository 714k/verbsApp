import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { MainVerbsComponent } from '../views/main-verbs/main-verbs.component';
import { TransitiveVerbsComponent } from '../views/main-verbs/transitive-verbs/transitive-verbs.component';
import { IntransitiveVerbsComponent } from '../views/main-verbs/intransitive-verbs/intransitive-verbs.component';
import { LinkingVerbsComponent } from '../views/main-verbs/linking-verbs/linking-verbs.component';
import { DynamicVerbsComponent } from '../views/main-verbs/dynamic-verbs/dynamic-verbs.component';
import { StaticVerbsComponent } from '../views/main-verbs/static-verbs/static-verbs.component';

import { HelpingVerbsComponent } from '../views/helping-verbs/helping-verbs.component';
import { PrimaryHelpingVerbsComponent } from '../views/helping-verbs/primary-helping-verbs/primary-helping-verbs.component';
import { ModalHelpingVerbsComponent } from '../views/helping-verbs/modal-helping-verbs/modal-helping-verbs.component';
import { SemiModalHelpingVerbsComponent } from '../views/helping-verbs/semi-modal-helping-verbs/semi-modal-helping-verbs.component';

import { SpecialVerbsComponent } from '../views/special-verbs/special-verbs.component';
import { DoMakeVerbsComponent } from '../views/special-verbs/do-make-verbs/do-make-verbs.component';
import { GoingToVerbsComponent } from '../views/special-verbs/going-to-verbs/going-to-verbs.component';
import { HadBetterVerbsComponent } from '../views/special-verbs/had-better-verbs/had-better-verbs.component';
import { PhrasalVerbsComponent } from '../views/special-verbs/phrasal-verbs/phrasal-verbs.component';
import { WillGoingToVerbsComponent } from '../views/special-verbs/will-going-to-verbs/will-going-to-verbs.component';

import { RegularVerbsComponent } from '../views/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from '../views/irregular-verbs/irregular-verbs.component';
import { VerbToBeComponent } from '../views/verb-to-be/verb-to-be.component';
import { VerbsWithPrepositionsComponent } from '../views/verbs-with-prepositions/verbs-with-prepositions.component';
import { VerbsWithTwoObjectsComponent } from '../views/verbs-with-two-objects/verbs-with-two-objects.component';
import { TheImperativeComponent } from '../views/the-imperative/the-imperative.component';

import { CategoryComponent } from '../views/category/category.component';
import { VerbComponent } from '../views/verb/verb.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
      level: 'one'
    }
  },
  {
    path: 'main-verbs',
    component: MainVerbsComponent,
    data: {
      title: 'Main Verbs',
      level: 'one'
    },
  },
  {
    path: 'main-verbs/transitive',
    component: TransitiveVerbsComponent,
    data: {
      title: 'Transitive Verbs',
      level: 'two',
      parent: 'main-verbs'
    }
  },
  {
    path: 'main-verbs/intransitive',
    component: IntransitiveVerbsComponent,
    data: {
      title: 'Intransitive Verbs',
      level: 'two',
      parent: 'main-verbs'
    }
  },
  {
    path: 'main-verbs/linking-verbs',
    component: LinkingVerbsComponent,
    data: {
      title: 'Linking Verbs',
      level: 'two',
      parent: 'main-verbs'
    }
  },
  {
    path: 'main-verbs/dynamic-verbs',
    component: DynamicVerbsComponent,
    data: {
      title: 'Dynamic Verbs',
      level: 'two',
      parent: 'main-verbs'
    }
  },
  {
    path: 'main-verbs/static-verbs',
    component: StaticVerbsComponent,
    data: {
      title: 'Static Verbs',
      level: 'two',
      parent: 'main-verbs'
    }
  },
  {
    path: 'helping-verbs',
    component: HelpingVerbsComponent,
    data: {
      title: 'Helping Verbs',
      level: 'one'
    },
  },
  {
    path: 'helping-verbs/primary-helping-verbs',
    component: PrimaryHelpingVerbsComponent,
    data: {
      title: 'Primary Helping Verbs',
      level: 'two',
      parent: 'helping-verbs'
    }
  },
  {
    path: 'helping-verbs/modal-helping-verbs',
    component: ModalHelpingVerbsComponent,
    data: {
      title: 'Modal Helping Verbs',
      level: 'two',
      parent: 'helping-verbs'
    }
  },
  {
    path: 'helping-verbs/semimodal-helping-verbs',
    component: SemiModalHelpingVerbsComponent,
    data: {
      title: 'Semimodal Helping Verbs',
      level: 'two',
      parent: 'helping-verbs'
    }
  },
  {
    path: 'special-verbs',
    component: SpecialVerbsComponent,
    data: {
      title: 'Special Verbs',
      level: 'one'
    },
  },
  {
    path: 'special-verbs/do-make',
    component: DoMakeVerbsComponent,
    data: {
      title: 'Do / Make',
      level: 'two',
      parent: 'special-verbs'
    }
  },
  {
    path: 'special-verbs/going-to',
    component: GoingToVerbsComponent,
    data: {
      title: 'Going To',
      level: 'two',
      parent: 'special-verbs'
    }
  },
  {
    path: 'special-verbs/had-better',
    component: HadBetterVerbsComponent,
    data: {
      title: 'Had better',
      level: 'two',
      parent: 'special-verbs'
    }
  },
  {
    path: 'special-verbs/phrasal-verbs',
    component: PhrasalVerbsComponent,
    data: {
      title: 'Phrasal Verbs',
      level: 'two',
      parent: 'special-verbs'
    }
  },
  {
    path: 'special-verbs/will-going-to',
    component: WillGoingToVerbsComponent,
    data: {
      title: 'Will / Going To',
      level: 'two',
      parent: 'special-verbs'
    }
  },
  {
    path: 'regular-verbs',
    component: RegularVerbsComponent,
    data: {
      title: 'Regular Verbs',
      level: 'one'
    },
  },
  {
    path: 'irregular-verbs',
    component: IrregularVerbsComponent,
    data: {
      title: 'Irregular Verbs',
      level: 'one'
    },
  },
  {
    path: 'verb-to-be',
    component: VerbToBeComponent,
    data: {
      title: 'Verb To Be',
      level: 'one'
    }
  },
  {
    path: 'verbs-with-prepositions',
    component: VerbsWithPrepositionsComponent,
    data: {
      title: 'Verbs With Prepositions',
      level: 'one'
    }
  },
  {
    path: 'verbs-with-two-objects',
    component: VerbsWithTwoObjectsComponent,
    data: {
      title: 'Verbs With To Objects',
      level: 'one'
    }
  },
  {
    path: 'the-imperative',
    component: TheImperativeComponent,
    data: {
      title: 'The Imperative',
      level: 'one'
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });