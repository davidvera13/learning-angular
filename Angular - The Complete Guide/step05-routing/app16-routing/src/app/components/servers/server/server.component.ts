import {Component, OnInit} from '@angular/core';
import {ServersService} from "../../../services/servers.service";
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} | undefined;

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
    this.server = undefined;
  }

  ngOnInit() {
    // replaced by the resolver in ServerResolver
    this.route.data.subscribe((data: Data) => this.server = data['server'] );
    // const serverId = +this.route.snapshot.params['id'];
    // this.route.params.subscribe((param: Params) => {
    //   this.server = this.serversService.getServer(+param["id"]);
    // });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'}).then();
  }
}
