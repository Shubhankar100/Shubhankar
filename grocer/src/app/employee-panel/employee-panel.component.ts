import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  //flags to change "pages"
  signInFlag:boolean=true;
  firstLoginFlag:boolean=false;
  mainPageFlag:boolean=false;

  //string for login Message and update password
  loginMessage:string="";
  changePasswordMessage:string="";

  firstLogin:boolean=true;//replace these later
  password:string="123";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  //Check the employee upon logging in
  checkEmployee(loginRef:NgForm): void {
    let loginForm = loginRef.value;
  
    //The ifs will need to be changed when Mongo is set up
    if (loginForm.username == "8675309" && loginForm.password == this.password) {
      this.loginMessage="";
      if(this.firstLogin){ //Checks if first login
        this.signInFlag=false; //go to firstLogin "page" if true
        this.firstLoginFlag=true;
      }
      else{
        //Otherwise go directly to the main page
        this.signInFlag=false;
        this.mainPageFlag=true;
      }
    }
    else{
      //Show that Login failed
      this.loginMessage="Login Failed";
    }
  }

  //Update the password upon first sign in
  updateFirstPassword(updatePassRef:NgForm): void {
    let updatePassForm = updatePassRef.value;
    //If they do not match, do not let anything happen
    if(updatePassForm.password!=updatePassForm.repassword){
      this.changePasswordMessage="Passwords do not match!"
    }
    else{//update password and move onto main page
      this.changePasswordMessage="";
      this.firstLoginFlag=false;
      this.mainPageFlag=true;

      //Change this when mongo is set up
      //(Currently this doesn't work, since login goes back to
      //main page, but it's not like it's fully functional anyway yet)
      this.password=updatePassForm.password;
      this.firstLogin=false;
    }
  }

  //Allows log out
  employeeLogout():void {
    this.mainPageFlag=false;
    this.signInFlag=true;
  }

}
