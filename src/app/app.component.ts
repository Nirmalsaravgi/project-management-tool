import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { BoardComponent } from "./pages/board/board.component";
import { UsersComponent } from "./pages/users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavbarComponent, ProjectsComponent, BoardComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-management-tool';
}
