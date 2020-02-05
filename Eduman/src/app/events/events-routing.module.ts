import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: 'events',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/events/all'
            },
            {
                path:'all',
                component: AllComponent
            },
            {
                path:'create',
                component: CreateComponent
            },
            {
                path:'details/:id',
                component: DetailsComponent
            }
        ]
    }
];

export const EventsRoutingModule = RouterModule.forChild(routes);