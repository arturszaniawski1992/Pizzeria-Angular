import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.scss']
})
export class DishAddComponent implements OnInit, OnDestroy {

  dish: Dish = {} as Dish;

  addDishForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    }
  )

  constructor(private readonly menuService: MenuService,
              private readonly router: Router) {
  }

  private destroy$: Subject<void> = new Subject<void>();

  ngOnInit() {
  }

  addDish(): void {
    this.dish = this.addDishForm.value;
    this.menuService.addDish(this.dish).subscribe();
    this.router.navigate(['/admin']);
    alert('Danie zostało dodane do menu!');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
