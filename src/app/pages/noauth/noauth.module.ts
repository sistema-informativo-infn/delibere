import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/noauth/home/home.component';
import { NoauthComponent } from '@pages/noauth/noauth.component';
import { SharedModule } from '@shared/shared.module';
import { UiModule } from '@ui/ui.module';

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
    UiModule,
    SharedModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class NoauthModule { }
