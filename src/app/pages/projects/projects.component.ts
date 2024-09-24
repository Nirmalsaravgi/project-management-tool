import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectList: any [] = [];
  projectObj: any = {
    "projectName": "",
    "shortName": ""
}

  masterSrv = inject(MasterService);

  ngOnInit(): void {
      this.getAllProjects();
  }

  getAllProjects(){
    this.masterSrv.getProjects().subscribe((res: any)=> {
      this.projectList = res;
    })
  }

  CreateProject(){
    this.masterSrv.createProject(this.projectObj).subscribe((res: any)=> {
      alert(res.message);
      this.getAllProjects();
    })
  }

}
