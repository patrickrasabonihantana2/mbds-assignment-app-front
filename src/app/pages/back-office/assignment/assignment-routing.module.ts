import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentComponent,
    children: [
      {
        path: '',
        component: AssignmentListComponent
      },
      {
        path: ':id',
        component: AssignmentDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
