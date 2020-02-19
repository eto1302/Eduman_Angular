import { Component, OnInit } from '@angular/core';
import { ReflectionsService } from 'src/app/services/reflections.service';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  textRegex = new RegExp('([a-zA-Z]+)');
  

  ngOnInit() { } 

  constructor(private reflectionsService: ReflectionsService, private userService: UserService) { }  

  handleCreate({ firstName, lastName, description, type }:
    { firstName: string, lastName: string, type: string, description: string}) {
      let teacherFullName = this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName;
      let studentFullName = firstName + ' ' + lastName;
      this.reflectionsService.create({teacherFullName, description, studentFullName, type})
  }

}
