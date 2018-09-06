import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private dishes: Dish[] = [];
  private total = 0;

  constructor(
    private activatedRoute: ActivatedRoute;

  private menuService: MenuService;
) {}

ngOnInit(){}


}
