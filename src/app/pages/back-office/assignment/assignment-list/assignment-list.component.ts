import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AssignmentService } from '../../../../services/assignment.service';
import { PaginateList } from '../../../../models/paginate-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-list',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './assignment-list.component.html',
  styleUrl: './assignment-list.component.scss'
})
export class AssignmentListComponent implements OnInit {
  assignmentsPaginate!: PaginateList<any>;
  userRole = localStorage.getItem('user_role');

  constructor(
    private assignmentService: AssignmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.assignmentService.list(1).subscribe(
      (data: any) => {
        this.assignmentsPaginate = data as PaginateList<any>;
        console.log('assignmentsPaginate', this.assignmentsPaginate);
      }
    );
  }

  onPageChange(event: PageEvent) {
    let page = event.pageIndex + 1;
    console.log('event', event);
    this.assignmentService.list(page).subscribe(
      (data: any) => {
        this.assignmentsPaginate = data as PaginateList<any>;
        console.log('assignmentsPaginate', this.assignmentsPaginate);
      }
    );
  }

  viewDetail(_id: any) {
    let id = _id as string;
    console.log('id', id);
    this.router.navigate(['/back/assignment', id]);
  }
}
