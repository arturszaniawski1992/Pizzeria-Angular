import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {CartService} from '../../services/cart.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  public dishes: Dish[] = [];
  total: number;


  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.dishes = (JSON.parse(localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]') as Dish[]);
    this.cartService.cart$.pipe(takeUntil(this.destroy$)).subscribe(dishes => {
        this.dishes = dishes;
        localStorage.setItem('cart', JSON.stringify(this.dishes));
      }
    );
  }

  removeDishFromCart(dish: Dish) {
    this.cartService.removeDishFromCart(dish);
  }

  calculateBasketCost(): number {
    this.total = 0;
    this.dishes.forEach(dish => this.total += parseFloat(dish.price));
    return this.total;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
