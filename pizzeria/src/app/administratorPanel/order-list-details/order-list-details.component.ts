import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../model/order';
import {OrderService} from '../../shared/order.service';

@Component({
  selector: 'app-order-list-details',
  templateUrl: './order-list-details.component.html',
  styleUrls: ['./order-list-details.component.scss']
})
export class OrderListDetailsComponent implements OnInit, OnDestroy {

  order: Order;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(+id).subscribe(order => {
      this.order = order;
    })
  }

  changeOrderStatusAdopted() {
    this.order.status = 'Przyjęto do realizacji!';
    this.orderService.changeStatusOfOrder(this.order).subscribe();
  }

  changeOrderStatusIssued() {
    this.order.status = 'Wysłano!';
    this.orderService.changeStatusOfOrder(this.order).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
