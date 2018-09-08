import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  dish: Dish;
  sub: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly menuService: MenuService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.menuService.getDish(+id).subscribe(dish => {
      this.dish = dish;
    };
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
