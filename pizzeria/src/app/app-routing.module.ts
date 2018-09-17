import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './administratorPanel/menu/menu.component';
import {OrderComponent} from './customerPanel/order/order.component';
import {DishDetailComponent} from './administratorPanel/dish-detail/dish-detail.component';
import {AuthGuardService} from './authentication/auth-guard.service';
import {CartComponent} from './customerPanel/cart/cart.component';
import {LogingComponent} from './administratorPanel/loging/loging.component';
import {MenuCustomerComponent} from './customerPanel/menu-customer/menu-customer.component';
import {OrderListComponent} from './administratorPanel/order-list/order-list.component';
import {OrderListDetailsComponent} from './administratorPanel/order-list-details/order-list-details.component';
import {DishAddComponent} from "./administratorPanel/dish-add/dish-add.component";

const routes: Routes = [
  {path: 'dishes', component: MenuCustomerComponent},
  {path: 'admin', component: MenuComponent, canActivate: [AuthGuardService]},
  {path: 'admin/dish-details/:id', component: DishDetailComponent, canActivate: [AuthGuardService]},
  {path: 'admin/order-list', component: OrderListComponent, canActivate: [AuthGuardService]},
  {path: 'admin/order-list/order-details/:id', component: OrderListDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'orders', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LogingComponent},
  {path: 'addDish', component: DishAddComponent, canActivate: [AuthGuardService]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
