import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  ticketsArray: any [] = [];
  status: string[] = ['Td', 'Ip', 'C'];
  selectedProjectData: any;

  constructor(private masterSrv: MasterService){
    this.masterSrv.onProjectChange$.subscribe((res:any)=> {
      this.getProjectTickets(res.projectName);
      this.selectedProjectData = res;
    })
    this.masterSrv.onTicketCreate$.subscribe((res: any)=> {
      this.getProjectTickets(res.selectedProjectData.projectName);
    })
  }

  getProjectTickets(obj: string){
    this.masterSrv.ticketByProjectName(obj).subscribe((res:any)=>{
      this.ticketsArray = res;
    })
  }

  filterTicket(status: string){
    return this.ticketsArray.filter(m=>m.status == status)
  }
  
}



// export class BoardComponent {

//   ticketsArray: any [] = [];
//   selectedProjectData: any ;
//   status: string[]= ['To Do','In Progress','Done'];

//   masterSrv = inject(MasterService);

//   constructor(private master: MasterService){
//     this.master.onProjectChange.subscribe((res: any)=> {
//       this.getProjectTickets(res.projectname);
//       this.selectedProjectData = res;
//     })
//     this.master.onTicketCreate.subscribe((res: any) => {
//       // debugger;
//       this.getProjectTickets(this.selectedProjectData.projectname);
//     })
//   }

//   getProjectTickets(projectname: string){
//     this.masterSrv.ticketByProjectName(projectname).subscribe((res: any)=> {
//       this.ticketsArray = res;
//     })
//   }

//   filterTicket(status: string) {
//     return this.ticketsArray.filter(m=>m.status == status)
//   }
  
// }
