import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '@core/guards/auth-guard.service';
import { AuthComponent } from '@pages/auth/auth.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuardService],
    children: [
    ],
  },
];

const COMPONENTS = [
  AuthComponent,
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
export class AuthModule { }
