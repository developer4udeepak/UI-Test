import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns = ['position', 'name', 'order'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Element {
  name: string;
  position: string;
  order: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 'Deepak', name: 'Hydrogen',order:'Apple'},
  { position: 'Deepak', name: 'Helium',order:'Apple' },
  { position: 'Deepak', name: 'Lithium',order:'Apple' },
  { position: 'Deepak', name: 'Beryllium',order:'Apple' },
  { position: 'Deepak', name: 'Boron',order:'Apple'},
  { position: 'Deepak', name: 'Carbon',order:'Apple'},
  { position: 'Deepak', name: 'Nitrogen',order:'Apple'},
  { position: 'Deepak', name: 'Oxygen',order:'Apple'},
  { position: 'Deepak', name: 'Fluorine',order:'Apple'}
];