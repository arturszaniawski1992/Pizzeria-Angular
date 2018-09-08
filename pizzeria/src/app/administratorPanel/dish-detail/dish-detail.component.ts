import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../shared/menu.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  dish: Dish;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly menuService: MenuService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.menuService.getDish(+id).subscribe(dish => {
      this.dish = dish;
    };
  }

  saveDish(dish: Dish) {
    this.menuService.saveDish(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}