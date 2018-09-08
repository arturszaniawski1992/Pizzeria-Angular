import {Injectable} from '@angular/core';
import {Dish} from './shared/dish';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishesInCart: Dish[] = [];
  basket$ = new Subject<Dish>();

  indexOfDish: number;


  constructor(public readonly httpclient: HttpClient) {
  }

  getDishesFromCart() {
    return this.dishesInCart;
  }

  addDishToCart(dish: Dish) {
    this.basket$.next(dish);
  }

  removeDishFromCart(dish: Dish) {
    this.indexOfDish = this.dishesInCart.indexOf(dish);
    this.dishesInCart.splice(this.indexOfDish, 1);
  }


}
