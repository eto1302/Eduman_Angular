import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'kinvey-angular-sdk';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private userService: UserService){}

    canActivate(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot){        
        if(this.userService.getActiveUser() == null){
            if(route.data.role.indexOf(undefined) != -1) return true;
            else return false;
        }
        return (this.userService.getActiveUser() != null) === route.data.isLogged 
        && route.data.role.indexOf(this.userService.getActiveUser().data.Role) != -1
        
    }


}