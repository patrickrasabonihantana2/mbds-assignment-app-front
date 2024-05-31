import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { authGuard } from '../../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'assignment',
        loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule)
      },
      {
        path: '',
        redirectTo: 'assignment',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
