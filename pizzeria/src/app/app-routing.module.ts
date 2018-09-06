import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';

const routes: Routes = [
  {path: 'dishes', component: MenuComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'dish-details/:id', component: DishDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
