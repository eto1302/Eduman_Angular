import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  emailRegex = new RegExp('(.{6,}@gmail\.com)');

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  async handleRegister({ firstName, lastName, username, passwords, number, school, Role }:
    { firstName: string, lastName: string, username: string, passwords: { password, rePassword }, number: number, school: string, Role: string }) {
    try {
      let password = passwords.password;
      await this.userService.signup({ firstName, lastName, username, password, number, school, Role});
      this.router.navigate(['']);
      
    } catch (error) {
      console.log(error);
    }
  }
}
