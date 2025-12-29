import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:3000/employee"


  addEmployee(data:any){
    return axios.post(`${this.url}/newEmp`, data)
  }

  getData(){

    return axios.get(`${this.url}/getEmp`)

  }

}
