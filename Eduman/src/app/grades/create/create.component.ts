import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grades.service';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {
  
  textRegex = new RegExp('([a-zA-Z]+)');  

  ngOnInit() {
  }

  constructor(private gradeService: GradeService, private userService: UserService) { }  

  handleCreate({ firstName, lastName, value, subject, description }:
    { firstName: string, lastName: string, value: number, subject: string, description: string}) {
      let teacherFullName = this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName;
      let studentFullName = firstName + ' ' + lastName;
      this.gradeService.create({teacherFullName, value, subject, description, studentFullName})
  }

}
