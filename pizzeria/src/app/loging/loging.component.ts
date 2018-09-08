import {Component, OnInit} from '@angular/core';
import {LogingService} from "../loging.service";

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {

  constructor(private readonly logingService: LogingService) {
  }

  ngOnInit() {
  }

  logAdmin(login: string, password: string) {
    this.logingService.logAdmin(login, password);
  }
}
