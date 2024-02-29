import { Component } from '@angular/core';

@Component({
  selector: 'Sidebar',
  template: `
    <clr-vertical-nav
      [clrVerticalNavCollapsible]="true"
      [(clrVerticalNavCollapsed)]="collapsed">
      <!-- <clr-vertical-nav-group>
        <cds-icon shape="film-strip" clrVerticalNavIcon/>
        Inventory
        <clr-vertical-nav-group-children>
          <a clrVerticalNavLink routerLink="/main/film" routerLinkActive="active">
            Films
          </a>
        </clr-vertical-nav-group-children>
      </clr-vertical-nav-group> -->
      <clr-vertical-nav-group routerLinkActive="active">
    <cds-icon shape="user" clrVerticalNavIcon></cds-icon>
    Normal
    <clr-vertical-nav-group-children>
      <a clrVerticalNavLink routerLink="./normal/pidgey" routerLinkActive="active">Pidgey</a>
      <a clrVerticalNavLink routerLink="./normal/snorlax" routerLinkActive="active">Snorlax</a>
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
export class Sidebar {
  collapsed = false;
}
