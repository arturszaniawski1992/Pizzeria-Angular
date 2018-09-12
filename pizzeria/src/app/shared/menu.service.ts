import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {LogingService} from '../administratorPanel/loging/loging.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();
  dishesInCart: Dish[];

  constructor(private readonly httpclient: HttpClient,
              private readonly loginService: LogingService) {
    this.dishesInCart = [];
  }

  getDishes(): void {
    let dishesObs$ = this.httpclient.get<Dish[]>('http://localhost:3000/dishes');
    if (!this.loginService.logedAsAdmin) {
      dishesObs$ = dishesObs$.pipe(
        map(dishes => dishes.filter(dish => dish.isAvailable))
      )
    }
    dishesObs$.subscribe(dishes => this.dishes$.next(dishes));
  }

  getPizza(): void {
    let dishesObs$ = this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=pizza');
    if (!this.loginService.logedAsAdmin) {
      dishesObs$ = dishesObs$.pipe(
        map(dishes => dishes.filter(dish => dish.isAvailable))
      )
    }
    dishesObs$.subscribe(dishes => this.dishes$.next(dishes));
  }

  getPasta(): void {
    let dishesObs$ = this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=spaghetti');
    if (!this.loginService.logedAsAdmin) {
      dishesObs$ = dishesObs$.pipe(
        map(dishes => dishes.filter(dish => dish.isAvailable))
      )
    }
    dishesObs$.subscribe(dishes => this.dishes$.next(dishes));
  }

  getDrinks(): void {
    let dishesObs$ = this.httpclient.get<Dish[]>('http://localhost:3000/dishes?type=napoj');
    if (!this.loginService.logedAsAdmin) {
      dishesObs$ = dishesObs$.pipe(
        map(dishes => dishes.filter(dish => dish.isAvailable))
      )
    }
    dishesObs$.subscribe(dishes => this.dishes$.next(dishes));
  }

  getDish(id: number): Observable<Dish> {
    return this.httpclient.get<Dish>(`http://localhost:3000/dishes/${id}`);
  }

  saveDish(dish: Dish) {
    this.httpclient.post<Dish>('http://localhost:3000/dishes', dish).subscribe(
      dishes => this.getDishes()
    )
  }

  changeAvailability(dish: Dish): Observable<Dish> {
    return this.httpclient.put<Dish>(`http://localhost:3000/dishes/${dish.id}`, dish);
  }


}

