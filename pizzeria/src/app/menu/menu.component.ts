import {Component, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {EventEmitter} from 'selenium-webdriver';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];


  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
    });
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


}
