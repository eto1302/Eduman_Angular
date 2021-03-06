import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [    
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
            role: [undefined]
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
            role: [undefined]
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);