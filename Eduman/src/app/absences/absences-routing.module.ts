import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
    {
        path: 'absences',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/absences/all'
            },
            {
                path:'all',
                component: AllComponent,
                data: {
                    isLogged: true
                }
            },
            {
                path:'create',
                component: CreateComponent,
                data: {
                    isLogged: true
                }
            }
        ]
    }
];

export const AbsencesRoutingModule = RouterModule.forChild(routes);