import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

  constructor(private router: Router) { }

  confirmUser() {
    this.router.navigate(['']);}

  ngOnInit() {
  }

}
