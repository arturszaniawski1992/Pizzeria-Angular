import {TestBed, inject} from '@angular/core/testing';

import {MenuService} from './menu.service';
import {Dish} from '../model/dish';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuService', () => {

  let menuService: MenuService;
  let mockedBackend: HttpTestingController;

  const mockedDish: Dish = {
    id: 1,
    name: 'Pizza Margherita',
    isAvailable: false,
    description: 'Sos, ser',
    type: 'pizza',
    price: 22.50,

  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    menuService = TestBed.get(MenuService);
    mockedBackend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(menuService).toBeTruthy();
  });

  it('should get dish', () => {
    //given
    let dish: Dish;
    //when
    menuService.getDish(mockedDish.id).subscribe(res => dish = res);
    mockedBackend.expectOne('http://localhost:3000/dishes/' + mockedDish.id).flush(mockedDish);
    //then
    expect(dish).toEqual(mockedDish);
  });
});
