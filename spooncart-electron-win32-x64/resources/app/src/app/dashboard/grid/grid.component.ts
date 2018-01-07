import { Component } from '@angular/core';

@Component({
  selector: 'grid',
  template: `
    <div>
      
      <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="cols"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [reorderable]="reorderable"
        [limit]="10">
      </ngx-datatable>
     
    </div>
  `,
})
export class GridComponent {

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  cols:any =[ {name:'_id'},{name:'first name'},{name:'last name'}];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:5000/get/customers`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}