import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './administratorPanel/menu/menu.component';
import {OrderComponent} from './customerPanel/order/order.component';
import {DishDetailComponent} from './administratorPanel/dish-detail/dish-detail.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {CartComponent} from './customerPanel/cart/cart.component';
import {LogingComponent} from './administratorPanel/loging/loging.component';
import {MenuCustomerComponent} from './customerPanel/menu-customer/menu-customer.component';
import {OrderListComponent} from './administratorPanel/order-list/order-list.component';
import {OrderListDetailsComponent} from './administratorPanel/order-list-details/order-list-details.component';

const routes: Routes = [
  {path: 'dishes', component: MenuCustomerComponent},
  {path: 'admin', component: MenuComponent, /*canActivate: [AuthGuardService]*/},
  {path: 'orders', component: OrderComponent},
  {path: 'dish-details/:id', component: DishDetailComponent},
  {path: 'order-details/:id', component: OrderListDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LogingComponent},
  {path: 'admin/order-list', component: OrderListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
