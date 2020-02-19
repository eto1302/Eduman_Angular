import { Injectable } from '@angular/core';
import { DataStoreService, UserService} from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    collection: any;
    events: any;

    constructor(datastoreService: DataStoreService, private router: Router, private userService: UserService) {
        this.collection = datastoreService.collection("Events");
    }

    load() {
        if (this.userService.getActiveUser().data.Role === "Teacher") {
            this.collection.find()
                .subscribe((entities) => {
                    this.events = entities.filter(e => e.teacherFullName ===
                        (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
                });
        }
        else if (this.userService.getActiveUser().data.Role === "Student") {
            this.collection.find()
            .subscribe((entities) => {
                this.events = entities.filter(e => e.studentFullName ===
                    (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
            });
        }
    }

    async create(entity: any) {
        await this.collection.save(entity);
        this.router.navigate(['/events/all']);
    }

    getDetails(id: string) {
        this.load();
        return this.events.filter((event) => event._id == id)[0];
    }
}