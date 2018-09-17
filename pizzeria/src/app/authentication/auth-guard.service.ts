import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LogingService} from '../services/loging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private loginService: LogingService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLogged = this.loginService.logedAsAdmin;
    if (isLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      alert('First, you should log in!');
    }
    return false;
  }


}
