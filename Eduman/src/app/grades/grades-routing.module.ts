import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: 'grades',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/grades/all'
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

export const GradesRoutingModule = RouterModule.forChild(routes);