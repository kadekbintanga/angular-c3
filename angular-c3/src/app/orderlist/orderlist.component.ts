import { Component, OnInit } from '@angular/core';
import {Order, OrdersMockData, Item} from '../samples/orders-mock-data';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  public orderList: OrdersMockData = new OrdersMockData();
  dataOrder: Order[] = this.orderList.orders;


  constructor() { }

  ngOnInit(): void {
  }

}
