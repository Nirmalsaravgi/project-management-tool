import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userList: any [] = [];
  userObj: any = {
    "emailId": "",
    "password": "",
    "fullName": ""
}

  masterSrv = inject(MasterService);

  ngOnInit(): void {
      this.getAllUsers();
  }

  getAllUsers(){
    this.masterSrv.GetUsers().subscribe((res: any)=> {
      this.userList = res;
    })
  }

  onSave(){
    this.masterSrv.CreateUser(this.userObj).subscribe((res: any)=> {
      debugger;
      alert(res.message);
      this.getAllUsers();
    })
  }

}
