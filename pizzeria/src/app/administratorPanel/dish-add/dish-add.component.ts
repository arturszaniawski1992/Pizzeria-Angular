import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/menu.service';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order} from "../../model/order";

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

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
  }

  addDish(): void {
    this.dish = this.addDishForm.value;
/*    this.dish.name = this.addDishForm.get('Nazwa').value;
    this.dish.isAvailable = this.addDishForm.get('Dostepność').value;
    this.dish.description = this.addDishForm.get('Opis').value;
    this.dish.type = this.addDishForm.get('Typ dania').value;
    this.dish.price = this.addDishForm.get('Cena').value;*/
    this.menuService.addDish(this.dish).subscribe();
    alert('Danie zostało dodane do menu!');
  }

}
