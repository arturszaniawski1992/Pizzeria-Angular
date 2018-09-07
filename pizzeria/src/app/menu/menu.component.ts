import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

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

  addDish(dish: Dish): void {
      this.cartService.addDishToCart(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}



