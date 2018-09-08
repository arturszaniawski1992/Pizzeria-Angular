import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {Subject} from 'rxjs';
import {MenuService} from '../../shared/menu.service';
import {Dish} from '../../model/dish';
import {Order} from '../../model/order';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: Order;
  dishes: Dish[];
  dishesIds: number[];

  private destroy$: Subject<void> = new Subject<void>();

  formToOrder = new FormGroup({
    firstName: new FormControl(),
    lasName: new FormControl(),
    mobile: new FormControl(),
    town: new FormControl(),
    street: new FormControl(),
  })

  constructor(private readonly orderService: OrderService, readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDishes();
  }

  addOrder(): void {
    this.order.dishIds = this.dishesIds;
    this.order.firstName = this.formToOrder.get('firstName').value;
    this.order.lastName = this.formToOrder.get('lastName').value;
    this.order.mobile = this.formToOrder.get('mobile').value;
    this.order.town = this.formToOrder.get('town').value;
    this.order.street = this.formToOrder.get('street').value;
    this.order.date = new Date();
    this.order.status = 'OK';
    this.orderService.addOrder(this.order).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
