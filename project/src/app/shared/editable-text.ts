import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'EditableText',
  standalone: true,
  imports: [],
  template: `
    <a #elem>test</a>
  `,
  styles: ``
})
export class EditableText implements AfterViewInit {
  @ViewChild('elem') elem;
  $ = (window as any).$;

  constructor() {
    this.$.fn.editable.defaults.mode = 'inline';
  }

  ngAfterViewInit(): void {
    this.$(this.elem.nativeElement).editable();
  }
}
