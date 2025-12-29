import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-portal';

  empId = ''
  name = ''
  project = ''
  role = ''

  constructor(private es : EmployeeService) {}

  submitEmployee(){

        const empDetails = {
        empId : this.empId,
        name : this.name,
        role : this.role,
        project : this.project
      }

      if (!this.empId || !this.name || !this.project || !this.role) {
        return;
        
      }

      this.es.addEmployee(empDetails)
      .then(res => {
        console.log("data sent",res.data)
          this.empId = ''
          this.name = ''
          this.project = ''
          this.role = ''
      })
      .catch(err => console.log(err))

    
    
  }

employees : any[] = []

  getData(){


    this.es.getData().then(res => {
        console.log("data recieved",res.data)
        this.employees = res.data
      })
      .catch(err => console.log("errr",err))
  }

}
