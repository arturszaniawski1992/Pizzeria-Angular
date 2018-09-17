import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {MenuService} from '../../services/menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  dish: Dish = {} as Dish;
  dishes: Dish[] = [];
  private destroy$: Subject<void> = new Subject<void>();


  constructor(private readonly menuService: MenuService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishes();
  }

  getDishes() {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getDishes();
  }

  getPizza() {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getPizza();
  }

  getPasta() {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getPasta();
  }

  getDrinks() {
    this.menuService.dishes$.pipe(takeUntil(this.destroy$)).subscribe(dishes => this.dishes = dishes);
    this.menuService.getDrinks();
  }

  removeDish(id) {
    this.menuService.removeDish(id);
    this.router.navigate(['/admin']);
    alert('Danie zostalo usunięte!');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}



