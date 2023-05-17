import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ServersService} from "./servers.service";

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService { // implements Resolve<{ id: number, name: string, status: string }>{

  constructor(private serverService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server | undefined {
    return this.serverService.getServer(+route.params['id']);
  }
}

export interface Server {
  id: number;
  name: string;
  status: string;
}
