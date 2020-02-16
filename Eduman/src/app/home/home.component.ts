import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get isLogged() { return this.userService.getActiveUser() != null}
  get currentFullName() {return this.userService.getActiveUser().data.firstName + " " + this.userService.getActiveUser().data.lastName;}
  get currentRole() {return this.userService.getActiveUser().data.Role;}

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

}
