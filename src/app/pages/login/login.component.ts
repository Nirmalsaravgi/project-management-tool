import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "userId": 0,
    "emailId": "",
    "fullName": "",
    "password": ""
  }

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin(){
    this.masterSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem('jiraLoginDetails', JSON.stringify(res.data));
        this.router.navigateByUrl('/board')
      } else{
        alert(res.message)
      }
    })
  }
}
