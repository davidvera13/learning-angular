import {Component, OnInit} from '@angular/core';
import {ServersService} from "../../../services/servers.service";
import {ActivatedRoute, Params, Router, UrlTree} from "@angular/router";
import {CanComponentDeactivate} from "../../../guards/deactivate.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate{
  server: {id: number, name: string, status: string} | undefined;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
    this.server = undefined;
    this.changesSaved = false;
  }

  ngOnInit() {
    // retrieve query params and snapshote.. will work on componnent create
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // using observable
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
    });
    this.route.fragment.subscribe()

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    if(this.server != undefined) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    if(this.server != undefined) {
      this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
      this.changesSaved = true;
      this.router.navigate(["../"], { relativeTo: this.route });
    }
  }

  // implementing methode from component in deactivate guard
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // logic if we are allowed to edit or not
    if(!this.allowEdit)
      return true;
    if((this.serverName !== this.server?.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved) {
      return confirm('Do you want to discard changes...');
    } else return true;
  }



}
