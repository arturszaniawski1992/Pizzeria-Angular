import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuCustomerComponent} from './menu-customer.component';
import {MenuService} from '../../shared/menu.service';
import {CartService} from '../cart.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {LogingService} from '../../administratorPanel/loging.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Dish} from '../../model/dish';

describe('MenuCustomerComponent', () => {
  let component: MenuCustomerComponent;
  let fixture: ComponentFixture<MenuCustomerComponent>;
  let menuService: MenuService;

  const menuServiceMock = {
    getDishes: jasmine.createSpy('getDishes'),
    dishes$: new Subject<Dish[]>(),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuCustomerComponent],
      providers: [{provide: MenuService, useValue: menuServiceMock},
        CartService,
        LogingService,
        HttpClient,
      ],
      imports: [RouterTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    menuService = TestBed.get(MenuService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all dishes from dishes', () => {
    //when
    component.getDishes();
    //expected
    expect(menuService.getDishes).toHaveBeenCalled();
  });

});
