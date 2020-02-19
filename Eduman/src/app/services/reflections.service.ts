import { Injectable } from '@angular/core';
import { DataStoreService, UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ReflectionsService {

    collection: any;
    reflections: any;

    constructor(datastoreService: DataStoreService, private router: Router, private userService: UserService) {
        this.collection = datastoreService.collection("Reflections");
    }

    load() {
        if (this.userService.getActiveUser().data.Role === "Teacher") {
            this.collection.find()
                .subscribe((entities) => {
                    this.reflections = entities.filter(e => e.teacherFullName ===
                        (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
                });
        }
        else if (this.userService.getActiveUser().data.Role === "Student") {
            this.collection.find()
            .subscribe((entities) => {
                this.reflections = entities.filter(e => e.studentFullName ===
                    (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName));
            });
        }
    }

    loadCompliments() {
        this.load();
        return this.reflections.filter(r => r.type == 'Compliment');

    }

    loadCriticisms() {
        this.load();
        return this.reflections.filter(r => r.type == 'Criticism');
    }

    async create(entity: any) {
        await this.collection.save(entity);
        this.router.navigate(['/reflections/allCompliments']);
    }

    getDetails(id: string) {
        this.load();
        return this.reflections.filter((reflection) => reflection._id == id)[0];
    }

}