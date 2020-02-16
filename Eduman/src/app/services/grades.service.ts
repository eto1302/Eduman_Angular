import { Injectable } from '@angular/core';
import { DataStoreService, UserService} from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

    collection: any;
    grades: any;

    constructor(datastoreService: DataStoreService, private router: Router, private userService: UserService) {
        this.collection = datastoreService.collection("Grades");
    }

    load() {
        this.collection.find()
            .subscribe((entities) => {
                this.grades = entities.filter((grade) => grade.teacherId == this.userService.getActiveUser()._id).sort((a, b) => a.subject - b.subject);
            });
    }

    async create(entity: any) {
        await this.collection.save(entity);
        this.router.navigate(['/grades/all']);
    }

    getDetails(id: string) {
        this.load();
        return this.grades.filter((grade) => grade._id == id)[0];
    }
}