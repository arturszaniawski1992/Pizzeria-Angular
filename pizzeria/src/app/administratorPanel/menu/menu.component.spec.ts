import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Dish} from '../../model/dish';
import {BehaviorSubject} from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MenuService;

  const mockedPizza: Dish = {
    id: 1,
    name: 'Pizza Margherita',
    isAvailable: true,
    description: 'Sos, ser',
    type: 'pizza',
    price: '22.50',
  };
  const mockedPasta: Dish = {
    id: 1,
    name: 'Spghetti Carbonara',
    isAvailable: false,
    description: 'Sos smietanowy',
    type: 'pasta',
    price: '22.50',
  };

  const mockedDrink: Dish = {
    id: 1,
    name: 'Sok',
    isAvailable: false,
    description: 'pomaranczowy, bananowy, jabłkowy',
    type: 'napoj',
    price: '14.00'
  };
  const mockedDishes: Dish [] = [
    mockedPizza,
    mockedPasta,
    mockedDrink,
  ];

  const menuServiceMock = {
    dishes$: new BehaviorSubject<Dish[]>(mockedDishes),
    getDishes: jasmine.createSpy('getDishes'),
    getPizza: jasmine.createSpy('getPizza'),
    getPasta: jasmine.createSpy('getPasta'),
    getDrinks: jasmine.createSpy('getDrinks'),
    removeDish: jasmine.createSpy('removeDish'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuComponent],
      providers: [{provide: MenuService, useValue: menuServiceMock}],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuService = TestBed.get(MenuService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all dishes', () => {
    // when
    component.getDishes();
    // then
    expect(menuService.getDishes).toHaveBeenCalled();
  });

  it('should get all pizza', () => {
    // when
    component.getPizza();
    // then
    expect(menuServiceMock.getPizza).toHaveBeenCalled();
  });

  it('should get all pasta', () => {
    // when
    component.getPasta();
    // then
    expect(menuServiceMock.getPasta).toHaveBeenCalled();
  });

  it('should get all drinks', () => {
    // when
    component.getDrinks();
    // then
    expect(menuServiceMock.getDrinks).toHaveBeenCalled();
  });

  it('should get all drinks', () => {
    // when
    component.removeDish(mockedPizza.id);
    // then
    expect(menuServiceMock.removeDish).toHaveBeenCalled();
  });


});
