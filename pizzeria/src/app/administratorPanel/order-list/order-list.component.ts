import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../model/order';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Order[];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.orders$.pipe(
      takeUntil(this.destroy$)).subscribe(orders => this.orders = orders);
    this.orderService.getOrders();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
