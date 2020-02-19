import { Injectable } from '@angular/core';
import { DataStoreService, UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

    collection: any;
    grades: any;
    subjects: string[];
    people: string[];

    constructor(datastoreService: DataStoreService, private router: Router, private userService: UserService) {
        this.collection = datastoreService.collection("Grades");
        this.subjects = [];
        this.people =[];
    }


    async load() {
        if (this.userService.getActiveUser().data.Role === "Teacher") {
            await this.collection.find()
                .subscribe((entities) => {
                    this.grades = entities.filter((grade) => grade.teacherFullName ===
                        (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName))
                        .sort((a, b) => a.subject - b.subject);

                    this.grades.forEach(element => {this.subjects.push(element.subject); this.people.push(element.studentFullName)});
                    var uniqueItems = [...new Set(this.subjects)];
                    this.subjects = uniqueItems;

                    var uniqueItems = [...new Set(this.people)];
                    this.people = uniqueItems;

                });
        }
        else if (this.userService.getActiveUser().data.Role === "Student") {
            await this.collection.find()
                .subscribe((entities) => {
                    this.grades = entities.filter((grade) => grade.studentFullName ===
                        (this.userService.getActiveUser().data.firstName + ' ' + this.userService.getActiveUser().data.lastName))
                        .sort((a, b) => a.subject - b.subject);

                        this.grades.forEach(element => {this.subjects.push(element.subject); this.people.push(element.teacherFullName)});
                        var uniqueItems = [...new Set(this.subjects)];
                        this.subjects = uniqueItems;
    
                        var uniqueItems = [...new Set(this.people)];
                        this.people = uniqueItems;
                    
                });
        }
    }

    getGradesBySubject(subject: string) {
        return this.grades.filter((grade) => grade.subject === subject);
    }

    async create(entity: any) {
        await this.collection.save(entity);
        this.router.navigate(['/grades/all']);
    }

    getDetails(id: string) {
        return this.grades.filter((grade) => grade._id == id)[0];
    }
}