import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { AllCriticismsComponent } from './all-criticisms/all-criticisms.component';
import { AllComplimentsComponent } from './all-compliments/all-compliments.component';
import { AuthGuard } from '../auth-guard';

const routes: Routes = [
    {
        path: 'reflections',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/reflections/allCompliments'
            },
            {
                path:'allCriticisms',
                component: AllCriticismsComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true,
                    role: ['Student', 'Teacher']
                }
            },
            {
                path:'allCompliments',
                component: AllComplimentsComponent,
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
            }
        ]
    }
];

export const ReflectionsRoutingModule = RouterModule.forChild(routes);