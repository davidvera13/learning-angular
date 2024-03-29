import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLoadServer(id: number) {
    // some operation may be handled before routing to another url
    this.router.navigate(["/servers", id, "edit"],
      {queryParams: { allowEdit: '1'}, fragment: "loading"})
      .then(r => console.log(r))
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
