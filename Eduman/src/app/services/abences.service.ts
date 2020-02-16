import { Injectable } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AbsenceService {

    collection: any;
    absences: any;

    constructor(datastoreService: DataStoreService, private router: Router) {
        this.collection = datastoreService.collection("Absences");
    }

    load() {
        this.collection.find()
            .subscribe((entities) => {
                this.absences = entities;
            });
    }

    async create(entity: any) {
        const savedEntity = await this.collection.save(entity);
        this.router.navigate(['/absences/all'])
    }
}