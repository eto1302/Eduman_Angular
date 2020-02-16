import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../error-styles.scss']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('(.{6,}@gmail\.com)');

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async handleLogin({ username, password }: { username: string, password: string }) {
    try {
      const user = await this.userService.login(username, password);      
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

}
