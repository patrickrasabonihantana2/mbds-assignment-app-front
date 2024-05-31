import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-back-office',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule
  ],
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.scss'
})
export class BackOfficeComponent {
  links: Array<any> = [
    {
      label: 'Subjects',
      path: ''
    },
    {
      label: 'Assignments',
      path: ''
    }
  ]
}
