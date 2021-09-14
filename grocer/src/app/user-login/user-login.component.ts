import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm) {
    let loginForm = loginRef.value;

    if (loginForm.username == "default" && loginForm.password == "123") {
      this.router.navigateByUrl("/userPanel");
    }
  }

}
