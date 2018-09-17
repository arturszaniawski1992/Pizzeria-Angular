import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogingService} from '../../services/loging.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit, OnDestroy {

  users: User[];
  user: User = {} as User;
  private destroy$: Subject<void> = new Subject<void>();

  loginForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }
  )

  constructor(private readonly logingService: LogingService, private readonly router: Router) {
  }

  ngOnInit() {
    this.logingService.users$.pipe(
      takeUntil(this.destroy$)).subscribe(users => this.users = users);
    this.logingService.getUsers();
  }

  logIn(): void {
    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users.find(us => us.username === this.user.username && us.password === this.user.password)) {
        this.logingService.logIn();
        alert('You are logged');
        return;
      }
    }

    alert('Invalid username or password!');
    this.router.navigate(['/dishes']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
