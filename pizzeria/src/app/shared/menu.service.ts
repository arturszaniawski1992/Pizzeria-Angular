import {Injectable} from '@angular/core';
import {Dish} from './dish';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();

  constructor(public readonly httpclient: HttpClient) {
  }

  getDishes(): void {
    this.httpclient.get<Dish[]>('http://localhost:3000/dishes').subscribe(dishes => this.dishes$.next(dishes));
  }

  getPizza(): void {
    this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=pizza').subscribe(dishes => this.dishes$.next(dishes));
  }

  getPasta(): void {
    this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=spaghetti').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDrinks(): void {
    this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=napoj').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDish(id: number): Observable<Dish> {
    return this.httpclient.get<Dish>(`http://localhost:3000/dishes/${id}`);
  }

  addDish(dish: Dish) {
    this.httpclient.post('http://localhost:3000/dishes', dish).subscribe(
      dishes => this.getDishes()
    );

  }
}

