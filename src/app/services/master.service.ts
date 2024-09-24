import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {  

  // apiUrl: string = "https://freeapi.miniprojectideas.com/api/Jira/";
  apiUrl: string = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  login(obj:any){
    return this.http.post(this.apiUrl + "Login", obj)
  }

  getProjects(){
    return this.http.get(`${this.apiUrl}get-projects/`)
  }

  createProject(obj: any){
    return this.http.post(`${this.apiUrl}create-project/`, obj)
  }

  gestAllProjects(obj: any){
    return this.http.put(`${this.apiUrl}UpdateProject`, obj)
  }

  gedtAllProjects(id: number){
    return this.http.get(`${this.apiUrl}DeleteProjectById?id=${id}`)
  }

  GetUsers(){
    return this.http.get(`${this.apiUrl}get-app-users/`)
  }

  CreateUser(obj: any){
    return this.http.post(`${this.apiUrl}create-app-user`, obj)
  }
}
