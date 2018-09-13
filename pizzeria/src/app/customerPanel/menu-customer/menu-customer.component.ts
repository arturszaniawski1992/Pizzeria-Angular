import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {Subject} from 'rxjs';
import {MenuService} from '../../shared/menu.service';
import {CartService} from '../cart.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-menu-customer',
  templateUrl: './menu-customer.component.html',
  styleUrls: ['./menu-customer.component.scss']
})
export class MenuCustomerComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly menuService: MenuService,
              private readonly  cartService: CartService) {
  }

  ngOnInit() {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishes();
  }

  getDishes() {
    this.menuService.getDishes();
  }

  getPizza(event: Event) {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getPizza();
  }

  getPasta(event: Event) {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getPasta();
  }

  getDrinks(event: Event) {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getDrinks();
  }

  addDishToCart(dish: Dish): void {
    this.cartService.addDishToCart(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
