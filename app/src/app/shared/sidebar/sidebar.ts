import { Component } from '@angular/core';
import { ClarityIcons, boltIcon, certificateIcon, flameIcon } from '@cds/core/icon';
ClarityIcons.addIcons(flameIcon);
ClarityIcons.addIcons(boltIcon);
ClarityIcons.addIcons(certificateIcon);

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styles: `:host {background-color: var(--clr-vertical-nav-bg-color)}`
})
export class Sidebar {
  demoCollapsible = true;
}
