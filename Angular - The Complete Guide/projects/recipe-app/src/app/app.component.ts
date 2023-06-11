import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'recipe-app';
  feature: string;

  constructor(private authService: AuthService,
              private loggingService: LoggingService) {
    // let define a default "page"
    this.feature = 'recipes';

  }
  ngOnInit(): void {
    console.log('Check login...')
    this.loggingService.printLog("# from AppComponent > ngOnInit");
    this.authService.autoLogin();
  }
}
