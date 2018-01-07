import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  template: '<ng4-loading-spinner> </ng4-loading-spinner><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
