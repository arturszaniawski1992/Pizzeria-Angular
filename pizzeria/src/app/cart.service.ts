import {Injectable} from '@angular/core';
import {Dish} from './shared/dish';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishesInCart: Dish[] = [];

  indexOfDish: number;


  constructor(public readonly httpclient: HttpClient) {
  }

  addDishToCart(dish: Dish) {
    this.dishesInCart.push(dish);
  }

  getDishesFromCart() {
    return this.dishesInCart;
  }

  removeDishFromCart(dish: Dish) {
    this.indexOfDish = this.dishesInCart.indexOf(dish);
    this.dishesInCart.splice(this.indexOfDish, 1);
  }
}


}
