import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private dishes: Dish[] = [];
  private total = 0;


  constructor(private readonly cartService: CartService) {

  }

  ngOnInit(): void {
    this.dishes = this.cartService.getDishesFromCart();

  }

  removeDishFromCart(dish: Dish) {
    this.cartService.removeDishFromCart(dish);
  }

  getDishesFromCart() {
    this.dishes = this.cartService.getDishesFromCart();
  }

}
