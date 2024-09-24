import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsersComponent } from './pages/users/users.component';
import { BoardComponent } from './pages/board/board.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:"full"
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: NavbarComponent,
        children: [
            {
                path:'projects',
                component: ProjectsComponent
            },
            {
                path:'users',
                component: UsersComponent
            },
            {
                path:'board',
                component: BoardComponent
            }
        ]
    }
];
