import { Component } from '@angular/core';
import { ClarityIcons, cogIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
ClarityIcons.addIcons(vmBugIcon);
ClarityIcons.addIcons(cogIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styles: ``
})
export class Header {

}
