import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  dish: Dish = {} as Dish;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly menuService: MenuService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.menuService.getDish(+id).subscribe(dish => {
      this.dish = dish;
    })
  }

  changeAvailability() {
    this.dish.isAvailable = !this.dish.isAvailable;
    this.menuService.changeAvailability(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
  }

  editDish() {
    this.menuService.editDish(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
    alert('Dish has been edited!');
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
