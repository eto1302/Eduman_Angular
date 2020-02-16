import { Injectable } from '@angular/core';
import { DataStoreService} from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    collection: any;
    events: any;

    constructor(datastoreService: DataStoreService, private router: Router) {
        this.collection = datastoreService.collection("Events");
    }

    load() {
        this.collection.find()
            .subscribe((entities) => {
                this.events = entities;
            });
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