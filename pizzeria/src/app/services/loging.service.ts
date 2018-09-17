import {asNativeElements, Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  logedAsAdmin = false;
  users$ = new Subject<User[]>();

  constructor(readonly httpclient: HttpClient,
              private readonly route: Router) {
    if (sessionStorage.getItem('admin')) {
      this.logedAsAdmin = true;
    }
  }

  getUsers(): void {
    this.httpclient.get<User[]>('http://localhost:3000/users').subscribe(users => this.users$.next(users));
  }

  logIn() {
    this.logedAsAdmin = true;
    sessionStorage.setItem('admin', 'true');
    this.route.navigate(['/admin']);
  }

  logOut() {
    this.logedAsAdmin = false;
    alert('You have been logged!');
    sessionStorage.removeItem('admin');
    this.route.navigate(['/']);

  }


}
