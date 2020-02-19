import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from '../auth-guard';
import { NotFoundComponent } from '../not-found/not-found.component';

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
                path:'details/:id',
                component: DetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Student', 'Teacher']
                }
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

export const GradesRoutingModule = RouterModule.forChild(routes);