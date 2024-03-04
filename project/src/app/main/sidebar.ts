import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'Sidebar',
  template: `
    <clr-vertical-nav
      [clrVerticalNavCollapsible]="true"
      [(clrVerticalNavCollapsed)]="collapsed">
      <clr-vertical-nav-group routerLinkActive="active">
        <cds-icon shape="film-strip" clrVerticalNavIcon/>
        Inventory
        <clr-vertical-nav-group-children *clrIfExpanded="current_path=='/main/film'">
          <a clrVerticalNavLink routerLink="/main/film" routerLinkActive="active">
            Films
          </a>
        </clr-vertical-nav-group-children>
      </clr-vertical-nav-group>

      <a clrVerticalNavLink routerLink="/main/store" routerLinkActive="active">
        <cds-icon clrVerticalNavIcon shape="store" />
        Store
      </a>
      <a clrVerticalNavLink routerLink="/main/customer" routerLinkActive="active">
        <cds-icon clrVerticalNavIcon shape='users'/>
        Customers
      </a>
    </clr-vertical-nav>
  `,
  styles: `:host {background: var(--clr-vertical-nav-bg-color)}`
})
export class Sidebar implements OnInit {
  collapsed = false;
  current_path = '';

  constructor(
    private location: Location,
    private router: Router
  ) {
    this.current_path = this.location.path();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.current_path = url;
      }
    });
  }
}
