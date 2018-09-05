import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../shared/dish';
import {MenuService} from "../shared/menu.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dishes: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
    });
  }

}
