import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders$ = new Subject<Order[]>();

  constructor(readonly httpclient: HttpClient) {
  }

  getOrders(): void {
    this.httpclient.get<Order[]>('http://localhost:3000/orders').subscribe(orders => this.orders$.next(orders));
  }

  addOrder(order: Order): Observable<Order> {
    return this.httpclient.post<Order>('http://localhost:3000/orders', order);
  }

}
