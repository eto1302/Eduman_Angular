import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/services/fees.service';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  dateTimeRegex = new RegExp('([0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}:[0-9]{2})');
  textRegex = new RegExp('([a-zA-Z]+)');

  constructor(private feeService: FeeService, private userService: UserService) { }

  ngOnInit() {
  }

  handleCreate({ firstName, lastName, cost, feeDate, description }:
    { firstName: string, lastName: string, cost: number, feeDate: string, description: string}) {

      let teacherFullName = this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName;
      let studentFullName = firstName + ' ' + lastName;  
      
      this.feeService.create({studentFullName, teacherFullName, cost, feeDate, description})
  }

}
