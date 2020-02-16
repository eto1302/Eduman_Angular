import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  get currentUserRole() { return this.userService.getActiveUser().data.Role; }
  get isLogged() { return this.userService.getActiveUser() != null}

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
