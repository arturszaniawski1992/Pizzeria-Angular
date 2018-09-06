import {Component, Input, OnInit, EventEmitter, OnDestroy} from '@angular/core';
import {Order} from '../shared/order';
import {OrderService} from '../shared/order.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  orders: Order[];
  sub: Subscription;

  constructor(private readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
