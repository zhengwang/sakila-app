import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'AuthLayout',
  standalone: true,
  imports: [Navbar, Sidebar, Footer, RouterModule],
  templateUrl: './authlayout.html',
  styleUrl: './authlayout.css'
})
export class Authlayout {

}
