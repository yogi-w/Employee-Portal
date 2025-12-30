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
  successMsg = ''

  constructor(private es : EmployeeService) {}

  submitEmployee(form : any){

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


        // refresh table immediately
        // this.getData()

        // show message
        this.successMsg = 'Employee added successfully';
        setTimeout(() => {
          this.successMsg = '';
        }, 3000);


        // reset form 
        form.resetForm()
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
