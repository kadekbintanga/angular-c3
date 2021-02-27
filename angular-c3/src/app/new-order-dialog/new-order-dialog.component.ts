import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Item, OrdersMockData} from '../samples/orders-mock-data';

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.scss']
})
export class NewOrderDialogComponent {
  public orderList: OrdersMockData = new OrdersMockData();
  categorys: string[] = this.orderList.categories;
  selectedCategory = 'category';
  selectedItem = 'item';
  disableSelectItem = new FormControl(false);
  cpuItems: Item[] = this.orderList.cpuList;
  motherboardItems: Item[] = this.orderList.motherBoardList;
  videocardItems: Item[] = this.orderList.motherBoardList;
  memoryItems: Item[] = this.orderList.motherBoardList;
}
