import { Component } from '@angular/core';

@Component({
  selector: 'Sidebar',
  template: `
    <clr-vertical-nav
      [clrVerticalNavCollapsible]="true"
      [(clrVerticalNavCollapsed)]="collapsed">
      <a clrVerticalNavLink routerLink="/main/film" routerLinkActive="active">
        <cds-icon clrVerticalNavIcon shape="film-strip" solid="true"/>
        Film Inventory
      </a>
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
  styles: ``
})
export class Sidebar {
  collapsed = false;
}
