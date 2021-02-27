import { Component, OnInit } from '@angular/core';
import {Order, OrdersMockData, Item} from '../samples/orders-mock-data';
import {MatDialog} from '@angular/material/dialog';
import {NewOrderDialogComponent} from '../new-order-dialog/new-order-dialog.component';



@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  public orderList: OrdersMockData = new OrdersMockData();
  dataOrder: Order[] = this.orderList.orders;


  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openNewOrderDialog() {
    const dialogRef = this.dialog.open(NewOrderDialogComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





}
