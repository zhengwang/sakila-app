import { Component } from '@angular/core';

@Component({
  selector: 'Mainlayout',
  template: `
    <div class="main-container">
      <header class="header-6">
        <div class="branding">
          <a routerLink="/main">
            <cds-icon shape="vm-bug" />
          </a>
        </div>
        <div class="settings">
          <a href="#" class="nav-link nav-icon">
            <cds-icon shape="cog" />
          </a>
        </div>
      </header>
      <div class="content-container">
        <Sidebar />
        <div class="content-area">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class Layout {

}
