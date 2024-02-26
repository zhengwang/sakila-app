import { Component } from '@angular/core';
import { ClarityIcons, angleIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule, ClrDropdownModule } from '@clr/angular';

ClarityIcons.addIcons(angleIcon);

@Component({
  selector: 'Authlayout',
  standalone: true,
  imports: [ClarityModule, ClrDropdownModule],
  template: `
    <div class="login-wrapper">
      <div class="login">
        <div class="login-header">
          <div class="logo"></div>
          <div class="actions">
            <clr-dropdown>
              <button class="btn btn-link btn-sm" clrDropdownTrigger>
                Language
                <cds-icon shape="angle" direction="down"></cds-icon>
              </button>
              <clr-dropdown-menu>
                <div aria-label="english" clrDropdownItem>English</div>
                <div aria-label="chinese" clrDropdownItem>Chinese</div>
              </clr-dropdown-menu>
            </clr-dropdown>
          </div>
        </div>
        <div class="login-body" style="align-items: start;">
          <section class="title">
            <div class="welcome">Welcome to</div>
            Sakila
            <div class="hint">Film Inventory System</div>
          </section>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class Layout {

}
