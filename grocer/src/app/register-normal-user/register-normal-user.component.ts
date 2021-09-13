import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-normal-user',
  templateUrl: './register-normal-user.component.html',
  styleUrls: ['./register-normal-user.component.css']
})
export class RegisterNormalUserComponent implements OnInit {
  // Message for form validation
  registrationMessage:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Gets a random number from 100,000 to 999,999
  genRandomId(): number {
    return (Math.random() * (999999 - 100000) + 100000);
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
      // TODO: there is a small chance of duplicate ids, find a way to prevent it
      alert("Registration successful! Your user ID is: " + userId);

      // _id, firstname, lastname, email, dob, address, password
      let userAccount = {_id:userId, firstname:registerForm.firstname, lastname:registerForm.lastname, email:registerForm.email, dob:registerForm.dob, phone:registerForm.phone, address:registerForm.address, password:registerForm.password};
    }
  }

}
