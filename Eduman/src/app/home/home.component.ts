import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }
  get currentFullName() { return this.userService.currentFullName; }
  get currentRole() {return this.userService.currentRole;}

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
