import {Component,  OnInit,  OnDestroy} from '@angular/core';
import {OrderService} from '../shared/order.service';
import {Subject, Subscription} from 'rxjs';
import {MenuService} from '../shared/menu.service';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  orders: Dish[];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.sub = this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }



}
