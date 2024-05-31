import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AssignmentService } from '../../../../services/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    DatePipe
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.scss'
})
export class AssignmentDetailComponent implements OnInit {
  assignment: any;
  userRole = localStorage.getItem('user_role');

  constructor(
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.assignmentService.getById(id).subscribe(
      (data: any) => {
        this.assignment = data;
        console.log('assignment', this.assignment);
      }
    );
  }

  onDelete() {
    let id = this.assignment._id as string;
    console.log('id', id);
    this.assignmentService.delete(id).subscribe(
      (data: any) => {
        this.router.navigate(['/back/assignment']);
      }
    );
  }

}
