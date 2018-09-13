import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {MenuService} from '../../shared/menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  dishes: Dish[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly menuService: MenuService) {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}



