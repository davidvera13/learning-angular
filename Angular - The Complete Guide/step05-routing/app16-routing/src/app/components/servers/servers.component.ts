import { Component } from '@angular/core';
import {ServersService} from "../../services/servers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  public servers: {id: number, name: string, status: string}[];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.servers = [];
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // allow programmatic routing
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
