import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  sidebarToggle() {

  }

  collapse() {}
}
