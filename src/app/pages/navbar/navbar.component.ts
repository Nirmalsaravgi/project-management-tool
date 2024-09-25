import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  projectList: any [] = [];
  userList: any [] = [];
  issueTypes: string[] = ['Ticket', 'Defect', 'RnD Work'];
  status: string[] = ['Td', 'Ip', 'C'];
  ticketObj: any = {
    "summary": "",
    "storyPoint": 0,
    "status": "",
    "assignedTo": "",
    "projectShortName": "",
  }

  masterSrv = inject(MasterService);

  ngOnInit(): void {
      this.getAllProjects();
      this.getAllUsers();
  }

  setProject(obj:any){
    this.masterSrv.onProjectChange$.next(obj);
  }

  getAllProjects(){
    this.masterSrv.getProjects().subscribe((res: any)=> {
      this.projectList = res;
      this.masterSrv.onProjectChange$.next(this.projectList[0]);
    })
  }

  getAllUsers(){
    this.masterSrv.GetUsers().subscribe((res: any)=> {
      this.userList = res;
    })
  }

  onCreateTicket(){
    this.masterSrv.CreateTicket(this.ticketObj).subscribe((res:any)=>{
      alert(res.message);
      this.masterSrv.onTicketCreate$.next(true);
    })
  }

}
