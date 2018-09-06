import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(readonly httpclient: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.httpclient.get<Order[]>('http://localhost:3000/orders');
  }

}
