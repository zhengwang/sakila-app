import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
    <table class="responsive cell-border display" #ref_tbl></table>
  `,
  styles: ``
})
export class Customer implements AfterViewChecked {

  @ViewChild('ref_tbl') ref_tbl: ElementRef;
  $ = (window as any).$;

  dataSet = [
    ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
  ];

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if (!this.$.fn.dataTable.isDataTable(this.ref_tbl.nativeElement)) {
      this.$(this.ref_tbl.nativeElement).DataTable({
        searching: false,
        columns: [
          { title: 'Name' },
          { title: 'Position' },
          { title: 'Office' },
          { title: 'Extn' },
          { title: 'Start date' },
          { title: 'Salary' }
        ],
        data: this.dataSet
      });
    }
  }
}
