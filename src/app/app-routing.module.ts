import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './pages/auth/auth.module#AuthModule',
  },
  {
    path: '',
    loadChildren: './pages/noauth/noauth.module#NoauthModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
