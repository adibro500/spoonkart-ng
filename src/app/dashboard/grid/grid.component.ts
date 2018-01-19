import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'grid',
  template: `
    <div>
      <div class="text-right">
        <button type="button" class="btn1 btn sv_btn" (click)="exportAsCSV()" >
              <label>
                 Export to CSV
              </label>
          </button>
      </div>
      <ngx-datatable
      #dataTable  
      class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [reorderable]="reorderable"
        [limit]="10">
       <ng-container *ngFor="let col of cols;let j=index">
                    <ng-container *ngIf="col!==undefined">
                     
                  <ngx-datatable-column prop={{col}} [sortable]="true" [name]="col"  [resizeable]="true" [canAutoResize]="true">        
                  </ngx-datatable-column>
                    </ng-container>
               </ng-container>  
      </ngx-datatable>
     
    </div>
  `,
})
export class GridComponent {

  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  cols = ['Customer ID', 'first name', 'last name', 'house address', 'flat address'];

  constructor(public changeDetectorRef: ChangeDetectorRef) {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://spoonkart-service.herokuapp.com/get/customers`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  @ViewChild('dataTable') public dataTable: DatatableComponent;

  exportAsCSV() {
    const columns: TableColumn[] = this.dataTable.columns;
    const headers =
      columns
        .map((column: TableColumn) => column.name)
        .filter((e) => e);  // remove column without name (i.e. falsy value)

    const rows: any[] = this.dataTable.rows.map((row) => {
      let r = {};
      columns.forEach((column) => {
        if (!column.name) { return; }   // ignore column without name
        if (column.prop) {
          let prop = column.prop;
          r[prop] = (typeof row[prop] === 'boolean') ? (row[prop]) ? 'Yes'
            : 'No'
            : row[prop];
        } else {
          // special cases handled here
        }
      })
      return r;
    });

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      headers: headers,
      showTitle: false,
      title: 'Report',
      useBom: true,
    };
    return new Angular2Csv(rows, 'report', options);
  }





}