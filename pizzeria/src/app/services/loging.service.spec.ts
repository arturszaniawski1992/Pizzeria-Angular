import {TestBed, inject, fakeAsync} from '@angular/core/testing';

import {LogingService} from './loging.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from '../model/user';

let mockedBackend: HttpTestingController;
let loginServ: LogingService;


const mockedUser: User = {
  username: 'admin',
  password: 'admin',
}

const mockedUsers: User[] = [mockedUser, mockedUser];
;

describe('LogingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogingService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    mockedBackend = TestBed.get(HttpClientTestingModule);
  });

  it('should be created', inject([LogingService], (service: LogingService) => {
    expect(service).toBeTruthy();
  }));


});
