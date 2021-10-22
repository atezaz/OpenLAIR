
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { stat } from 'fs';
import { DataService } from "./data.service";

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private dataService: DataService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    if (this.dataService.loggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }


}
