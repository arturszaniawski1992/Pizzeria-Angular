import {Injectable} from '@angular/core';
import {User} from '../../model/user';
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
  }

  getUsers(): void {
    this.httpclient.get<User[]>('http://localhost:3000/users').subscribe(users => this.users$.next(users));
  }

  logIn(answer: boolean) {
    this.logedAsAdmin = answer;
    this.route.navigate(['/admin']);
  }

  logOut() {
    this.logedAsAdmin = false;
    alert('You have been logged!')
    this.route.navigate(['/']);
  }


}
