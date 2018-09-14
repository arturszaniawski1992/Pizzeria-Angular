import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;
  orders$ = new Subject<Order[]>();

  constructor(readonly httpclient: HttpClient) {
  }

  getOrders(): void {
    this.httpclient.get<Order[]>('http://localhost:3000/orders').subscribe(orders => this.orders$.next(orders));
  }

  addOrder(order: Order): Observable<Order> {
    return this.httpclient.post<Order>('http://localhost:3000/orders', order);
  }

  changeStatusOfOrder(order: Order): Observable<Order> {
    return this.httpclient.put<Order>(`http://localhost:3000/orders/${order.id}`, order);
  }

  getOrder(id: number): Observable<Order> {
    return this.httpclient.get<Order>(`http://localhost:3000/orders/${id}`);
  }

  removeOrder(id: number): Observable<Order> {
    return this.httpclient.delete<Order>(`http://localhost:3000/orders/${id}`);
  }


}
