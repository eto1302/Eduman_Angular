import { Injectable } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ReflectionsService {

    collection: any;
    reflections: any;

    constructor(datastoreService: DataStoreService, private router: Router) {
        this.collection = datastoreService.collection("Reflections");
    }

    load() {
        this.collection.find()
            .subscribe((entities) => {
                this.reflections = entities;
            });
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