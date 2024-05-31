import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-back-office',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.scss'
})
export class BackOfficeComponent implements OnInit {
  user!: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.authService.user) {
      this.user = this.authService.user;
    }
  }

  links: Array<any> = [
    {
      label: 'Subjects',
      path: ''
    },
    {
      label: 'Assignments',
      path: ''
    }
  ];

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
