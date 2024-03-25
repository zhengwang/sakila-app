import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <AuthLayout>
      <router-outlet></router-outlet>
    </AuthLayout>
  `,
  styles: ``
})
export class Index {

}
