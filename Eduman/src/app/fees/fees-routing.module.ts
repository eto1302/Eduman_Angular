import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from '../auth-guard';

const routes: Routes = [
    {
        path: 'fees',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/fees/all'
            },
            {
                path:'all',
                component: AllComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Student', 'Teacher', 'Principal']
                }
            },
            {
                path:'create',
                component: CreateComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Teacher', 'Principal']
                }
            },
            {
                path:'details/:id',
                component: DetailsComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Student', 'Teacher', 'Principal']
                }
            }
        ]
    }
];

export const FeesRoutingModule = RouterModule.forChild(routes);