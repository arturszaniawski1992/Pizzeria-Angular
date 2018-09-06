import {Component,  OnInit,  OnDestroy} from '@angular/core';
import {OrderService} from '../shared/order.service';
import {Subscription} from 'rxjs';
import {MenuService} from '../shared/menu.service';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  orders: Dish[];
  sub: Subscription;

  constructor(private readonly orderService: OrderService,
              private readonly menuService: MenuService,
  ) {
  }

  ngOnInit() {
    this.sub = this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  ngOnDestroy():
    void {
    this.sub.unsubscribe();
  }


}
