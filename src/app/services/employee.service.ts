import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  postEmployee(data :any){
    return this.http.post<any>("http://localhost:3000/emplyees/",data)
  } 
}
