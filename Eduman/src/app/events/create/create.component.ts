import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events.service';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../../../error-styles.scss']
})
export class CreateComponent implements OnInit {

  dateTimeRegex = new RegExp('([0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}:[0-9]{2})');
  textRegex = new RegExp('([a-zA-Z]+)');
  constructor(private eventService: EventService, private userService: UserService) { }

  ngOnInit() {
  }

  handleCreate({ firstName, lastName, type, eventDate, description }:
    { firstName: string, lastName: string, type: string, eventDate: string, description: string}) {
      let teacherFullName = this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName;
      let studentFullName = firstName + ' ' + lastName;  
      this.eventService.create({studentFullName, teacherFullName, type, eventDate, description})
  }

}
