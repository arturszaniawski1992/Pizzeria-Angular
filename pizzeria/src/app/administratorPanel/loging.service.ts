import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogingService {
  login: 'admin';
  password: 'admin';
  user: 'user';

  constructor() { }

  logAdmin(login: string, password: string){
    if (login === this.login && password === this.password){
      this.user = 'admin';
      alert('You have been logged as ADMIN!');
    }
  }
}
