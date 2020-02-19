import { Injectable } from '@angular/core';
import { DataStoreService, UserService} from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FeeService {

    collection: any;
    fees: any;

    constructor(datastoreService: DataStoreService, private router: Router, private userService: UserService) {
        this.collection = datastoreService.collection("Fees");
    }

    load() {
        if (this.userService.getActiveUser().data.Role === "Teacher") {
            this.collection.find()
                .subscribe((entities) => {
                    this.fees = entities.filter(e => e.teacherFullName ===
                        (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
                });
        }
        else if (this.userService.getActiveUser().data.Role === "Student") {
            this.collection.find()
            .subscribe((entities) => {
                this.fees = entities.filter(e => e.studentFullName ===
                    (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
            });
        }
    }

    async create(entity: any) {
        await this.collection.save(entity);
        this.router.navigate(['/fees/all']);
    }

    getDetails(id: string) {
        this.load();
        return this.fees.filter((fee) => fee._id == id)[0];
    }
}