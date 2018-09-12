import {Component} from '@angular/core';
import {MenuService} from './shared/menu.service';
import {Router} from '@angular/router';
import {LogingService} from './administratorPanel/loging/loging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PIZZERIA';

  constructor(private menuService: MenuService,  private router: Router,  readonly logingService: LogingService) {}

  navigateToMenu() {
    this.menuService.getDishes();
    this.router.navigate(['/dishes']);
  }



}

