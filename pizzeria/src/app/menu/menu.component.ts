import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {


  dishes: Dish[];
  orders: Dish[];
  sub: Subscription;


  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.sub = this.menuService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  getPizza(event: Event) {
    this.sub = this.menuService.getPizza().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  getPasta(event: Event) {
    this.sub = this.menuService.getPasta().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  getDrinks(event: Event) {
    this.sub = this.menuService.getDrinks().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  addToBasket(event: Event){
    this.sub = this.menuService


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
