import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishesInCart: Dish[] = [];
  addedDish = (JSON.parse(localStorage.getItem('dishesAdded') ? localStorage.getItem('dishesAdded') : '[]') as Dish[]);
  basket$ = new Subject<Dish>();
  indexOfDish: number;

  constructor() {
  }

  getDishesFromCart() {
    return this.dishesInCart;
  }

  addDishToCart(dish: Dish) {
    this.addedDish.push(dish);
    localStorage.setItem('dishesAdded', JSON.stringify(this.addedDish));
  }

  removeDishFromCart(dish: Dish) {
    this.indexOfDish = this.addedDish.indexOf(dish);
    this.addedDish.splice(this.indexOfDish, 1);
    localStorage.setItem('dishesAdded', JSON.stringify(this.addedDish));
  }


}
