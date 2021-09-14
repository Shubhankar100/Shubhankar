import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  uid:number;
}

@Component({
  selector: 'app-register-normal-user',
  templateUrl: './register-normal-user.component.html',
  styleUrls: ['./register-normal-user.component.css']
})
export class RegisterNormalUserComponent implements OnInit {
  // Message for form validation
  registrationMessage:string = "";
  // Default amount of funds for new users
  newUserFunds:number = 100;

  constructor(public router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  // Gets a random number from 100,000 to 999,999
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 100000) + 100000);
  }

  openDialog(userid:number): void {
    this.dialog.open(DialogRegisterDialog, {
      data: {
        uid:userid
      }
    });
  }

  // Called when the user hits the submit button
  registerUser(registerRef:NgForm): void {
    let registerForm = registerRef.value;

    // Make sure the passwords match
    if (registerForm.password != registerForm.repassword) {
      this.registrationMessage = "Error: Passwords do not match";
    }
    else { // Registration success
      let userId = this.genRandomId();
      this.registrationMessage = "";
      // TODO: there is a small chance of duplicate ids, find a way to prevent it?
      //alert("Registration successful! Your user ID is: " + userId);
      this.openDialog(userId);

      // _id, firstname, lastname, email, dob, address, password
      let userAccount = {_id:userId, firstname:registerForm.firstname, lastname:registerForm.lastname, email:registerForm.email, dob:registerForm.dob, phone:registerForm.phone, address:registerForm.address, password:registerForm.password, funds:this.newUserFunds};
      
      this.router.navigateByUrl("/userLogin");
    }
  }

}

@Component({
  selector: 'dialog-register',
  templateUrl: 'dialog-register.html'
})
export class DialogRegisterDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { }
}
