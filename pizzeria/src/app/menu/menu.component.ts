import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  dishes2$: Subject <Dish[]>;


  dishes: Dish[];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    //this.menuService.dishes$.subscribe(dishes => this.dishes = dishes);
    //this.dishes2$ = this.menuService.dishes$;
    this.menuService.getDishes();
  }

  getPizza(event: Event) {
    this.menuService.getPizza().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  getPasta(event: Event) {
    this.menuService.getPasta().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  getDrinks(event: Event) {
    this.menuService.getDrinks().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  addDish(event: Event): void {
    const dish: Dish = {
      isAvailable: true,
      price: 20,
      name: 'Spaghetti',
      description: 'nowe danie',
      type: 'spagetti',
    };
    this.menuService.addDish(dish);
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

}



