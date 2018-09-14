import {TestBed, fakeAsync} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {Dish} from '../model/dish';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LogingService} from '../administratorPanel/loging/loging.service';

describe('MenuService', () => {

  let service: MenuService;
  let mockedBackend: HttpTestingController;
  let loginServ: LogingService;

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
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    service = TestBed.get(MenuService);
    loginServ = TestBed.get(LogingService);
    mockedBackend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get dish', () => {
    // given
    let dish: Dish;
    // when
    service.getDish(mockedPizza.id).subscribe(res => dish = res);
    mockedBackend.expectOne('http://localhost:3000/dishes/' + mockedPizza.id).flush(mockedPizza);
    // then
    expect(dish).toEqual(mockedPizza);
  });

  it('should get all available dishes',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = false;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getDishes();
      mockedBackend.expectOne('http://localhost:3000/dishes').flush(mockedDishes);
      // then
      expect(dishes.length).toEqual(1);

    }));

  it('should get all dishes when admin is logged',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = true;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getDishes();
      mockedBackend.expectOne('http://localhost:3000/dishes').flush(mockedDishes);
      // then
      expect(dishes).toEqual(mockedDishes);
    }));


  it('should get all available pizzas',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = false;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getPizza();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=pizza').flush(mockedDishes);
      // then
      expect(dishes.length).toEqual(1);
    }));

  it('should get all pizzas when admin is logged',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = true;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getPizza();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=pizza').flush(mockedDishes);
      // then
      expect(dishes).toEqual(mockedDishes);
    }));

  it('should get all available spaghetti',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = false;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getPasta();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=spaghetti').flush(mockedDishes);
      // then
      expect(dishes.length).toEqual(1);
    }));

  it('should get all spaghetti when admin is logged',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = true;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getPasta();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=spaghetti').flush(mockedDishes);
      // then
      expect(dishes).toEqual(mockedDishes);
    }));

  it('should get all available drinks',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = false;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getDrinks();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=napoj').flush(mockedDishes);
      // then
      expect(dishes.length).toEqual(1);
    }));


  it('should get all drinks when admin is logged',
    fakeAsync(() => {
      // given
      let dishes: Dish[] = [];
      // when
      loginServ.logedAsAdmin = true;
      service.dishes$.subscribe(ds => dishes = ds);
      service.getDrinks();
      mockedBackend.expectOne('http://localhost:3000/dishes?type=napoj').flush(mockedDishes);
      // then
      expect(dishes).toEqual(mockedDishes);
    }));

  it('should change availability of dish', () => {
    // given
    let dish: Dish = {} as Dish;
    // when
    service.changeAvailability(mockedPizza).subscribe(res => dish = res);
    mockedBackend.expectOne('http://localhost:3000/dishes/' + mockedPizza.id).flush(mockedPizza);
    // then
    expect(dish).toEqual(mockedPizza);
  });

});
