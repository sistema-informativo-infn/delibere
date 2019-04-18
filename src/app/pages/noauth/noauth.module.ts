import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoauthComponent } from './noauth.component';

const ROUTES: Routes = [
  {
    path: '',
    component: NoauthComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

const COMPONENTS = [
  NoauthComponent,
  HomeComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class NoauthModule { }
