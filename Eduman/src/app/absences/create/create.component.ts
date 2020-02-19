import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/abences.service';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  dateTimeRegex = new RegExp('([0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}:[0-9]{2})');
  textRegex = new RegExp('([a-zA-Z]+)');

  constructor(private absenceService: AbsenceService, private userService: UserService) { }

  ngOnInit() {
  }

  handleCreate({ firstName, lastName, subject, dateAbsent }:
    { firstName: string, lastName: string, subject: string, dateAbsent: string }) {
      let teacherFullName = this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName;
      let studentFullName = firstName + ' ' + lastName;      
      this.absenceService.create({studentFullName, teacherFullName, dateAbsent, subject})
  }

}
