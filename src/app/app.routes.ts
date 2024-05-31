import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'back',
    loadChildren: () => import('./pages/back-office/back-office.module').then(m => m.BackOfficeModule)
  },
  {
    path: '',
    redirectTo: '/back',
    pathMatch: 'full'
  }
];
