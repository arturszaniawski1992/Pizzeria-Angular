import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishesInCart: Dish[] = [];
  cart$ = new Subject<Dish[]>();
  indexOfDish: number;

  constructor() {
  }


  addDishToCart(dish: Dish) {
    this.dishesInCart.push(dish);
    this.cart$.next(this.dishesInCart);

  }

  removeDishFromCart(dish: Dish) {
    this.indexOfDish = this.dishesInCart.indexOf(dish);
    this.dishesInCart.splice(this.indexOfDish, 1);
    this.cart$.next(this.dishesInCart);
  }


}
