import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {Subject} from 'rxjs';
import {Dish} from '../../model/dish';
import {Order} from '../../model/order';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: Order = {} as Order;
  dishes: Dish[] = [];
  dishesIds: number[] = [];

  private destroy$: Subject<void> = new Subject<void>();

  formToOrder = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
    }
  )

  constructor(private readonly orderService: OrderService,
              private readonly router: Router) {
  }

  ngOnInit() {
  }


  addOrder(): void {
    this.getDishes();
    this.order.dishesIds = this.dishesIds;
    this.order.firstName = this.formToOrder.get('firstName').value;
    this.order.lastName = this.formToOrder.get('lastName').value;
    this.order.mobile = this.formToOrder.get('mobile').value;
    this.order.town = this.formToOrder.get('town').value;
    this.order.street = this.formToOrder.get('street').value;
    this.order.number = this.formToOrder.get('number').value;
    this.order.date = new Date();
    this.order.status = 'Zamówienie zostało złożone!';
    this.orderService.addOrder(this.order).subscribe();
    alert('Twoje zamówienie zostało złożone!');
    this.router.navigate(['/']);
    localStorage.removeItem('cart');
  }


  getDishes(): void {
    this.dishes = (JSON.parse(localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]') as Dish[]);
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
