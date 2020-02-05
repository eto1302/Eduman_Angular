import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { AllCriticismsComponent } from './all-criticisms/all-criticisms.component';
import { AllComplimentsComponent } from './all-compliments/all-compliments.component';

const routes: Routes = [
    {
        path: 'reflections',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/reflections/all'
            },
            {
                path:'allCriticisms',
                component: AllCriticismsComponent
            },
            {
                path:'allCompliments',
                component: AllComplimentsComponent
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

export const ReflectionsRoutingModule = RouterModule.forChild(routes);