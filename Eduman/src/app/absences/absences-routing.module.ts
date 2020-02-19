import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { AuthGuard } from '../auth-guard';
import { NotFoundComponent } from '../not-found/not-found.component';

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
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Student', 'Teacher']
                }
            },
            {
                path:'create',
                component: CreateComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Teacher']
                }
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

export const AbsencesRoutingModule = RouterModule.forChild(routes);