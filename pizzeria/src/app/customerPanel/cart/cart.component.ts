import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {CartService} from '../cart.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  private dishes: Dish[] = [];
  private total = 0;


  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.dishes = (JSON.parse(localStorage.getItem('basket') ? localStorage.getItem('basket') : '[]') as Dish[]);
    this.cartService.basket$.pipe(takeUntil(this.destroy$)).subscribe(dish => {
        this.dishes.push(dish);
        localStorage.setItem('basket', JSON.stringify(this.dishes));

      }
    );
  }

  removeDishFromCart(dish: Dish) {
    this.cartService.removeDishFromCart(dish);

  }

  getDishesFromCart() {
    this.dishes = this.cartService.getDishesFromCart();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
