import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-admin-sandbox',
  templateUrl: './admin-sandbox.component.html',
  styleUrls: ['./admin-sandbox.component.css']
})
export class AdminSandboxComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  // Gets a random number from 100,000 to 999,999
  // TODO: there is a small chance of duplicate ids, find a way to prevent it?
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 100000) + 100000);
  }

  // Called when the user hits the add employee button
  addEmployee(addEmployeeRef:NgForm): void {
    let employeeForm = addEmployeeRef.value;

    let empId = this.genRandomId();
    let empAccount = {_id:empId, firstname:employeeForm.firstname, lastname:employeeForm.lastname, email:employeeForm.email, password:employeeForm.password, hasDefaultPass:true};

    // Register the employee in the database
    this.employeeService.registerEmployee(empAccount)
    .subscribe(
      response=> {
        console.log(response);
        alert("Employee created successfully!");
      },
      error=> {
        console.log(error);
      });
  }

  deleteEmployee(delEmployeeRef:NgForm): void {
    let employeeForm = delEmployeeRef.value;

  }

  generateReports(reportRef:NgForm): void {
    
  }

}
