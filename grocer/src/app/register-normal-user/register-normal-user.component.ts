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
    let pass1 = registerForm.password;
    let pass2 = registerForm.repassword;
    if (pass1 != pass2) {
      this.registrationMessage = "Error: Passwords do not match";
      return;
    }

    // Grab the user input from the fields
  }

}
