import { Injectable } from '@angular/core';
import { DataStoreService} from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FeeService {

    collection: any;
    fees: any;

    constructor(datastoreService: DataStoreService, private router: Router) {
        this.collection = datastoreService.collection("Fees");
    }

    load() {
        this.collection.find()
            .subscribe((entities) => {
                this.fees = entities;
            });
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