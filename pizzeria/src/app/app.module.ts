import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CustomerComponent} from './customerPanel/customer/customer.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './administratorPanel/menu/menu.component';
import {OrderComponent} from './customerPanel/order/order.component';
import {DishDetailComponent} from './administratorPanel/dish-detail/dish-detail.component';
import {AdministratorComponent} from './administratorPanel/administrator/administrator.component';
import {CartComponent} from './customerPanel/cart/cart.component';
import {LogingComponent} from './administratorPanel/loging/loging.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuCustomerComponent} from './customerPanel/menu-customer/menu-customer.component';
import {OrderListComponent} from './administratorPanel/order-list/order-list.component';
import { OrderListDetailsComponent } from './administratorPanel/order-list-details/order-list-details.component';
import {LogingService} from './administratorPanel/loging/loging.service';
import { DishAddComponent } from './administratorPanel/dish-add/dish-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuComponent,
    OrderComponent,
    DishDetailComponent,
    AdministratorComponent,
    CartComponent,
    LogingComponent,
    MenuCustomerComponent,
    OrderListComponent,
    OrderListDetailsComponent,
    DishAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LogingService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
