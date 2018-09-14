import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/menu.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.scss']
})
export class DishAddComponent implements OnInit {

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

  ngOnInit() {
  }

  addDish(): void {
    this.dish = this.addDishForm.value;
    this.menuService.addDish(this.dish).subscribe();
    this.router.navigate(['/admin']);
    alert('Danie zostało dodane do menu!');
  }

}
