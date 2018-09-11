import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LogingService {

  user = {username: 'admin', password: 'admin'} as User;

  constructor(private router: Router) {
  }

  logIn(login: string, password: string) {
    if (login === this.user.username && password === this.user.password) {
      alert('You have been logged as ADMIN!');
      this.router.navigate(['/admin']);
    } else {
      alert('Password or username incorrect!');
    }
  }

  logOut() {
    alert('You have been logged out!');
  }
}
