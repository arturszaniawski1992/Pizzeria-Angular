import {Injectable} from '@angular/core';
import {Dish} from './dish';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(readonly httpclient: HttpClient) {
  }

  getDishes(): Observable<Dish[]> {
    return this.httpclient.get<Dish[]>('http://localhost:3000/dishes');
  }
}
