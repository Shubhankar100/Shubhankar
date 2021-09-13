import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-normal-user',
  templateUrl: './register-normal-user.component.html',
  styleUrls: ['./register-normal-user.component.css']
})
export class RegisterNormalUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(registerRef:NgForm) {
    let registerForm = registerRef.value;
  }

}
