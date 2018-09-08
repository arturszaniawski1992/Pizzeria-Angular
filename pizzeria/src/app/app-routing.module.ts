import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {CartComponent} from './cart/cart.component';
import {LogingComponent} from './loging/loging.component';

const routes: Routes = [
  {path: 'dishes', component: MenuComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'dish-details/:id', component: DishDetailComponent},
  {path: 'dishes/1', component: MenuComponent, canActivate: [AuthGuardService]},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LogingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
