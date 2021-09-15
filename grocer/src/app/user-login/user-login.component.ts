import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  checkUser(loginRef:NgForm): void {
    let loginForm = loginRef.value;
    

    // if (loginForm.username == "default" && loginForm.password == "123") {
    //   this.router.navigateByUrl("/userPanel");
    // }

  }

}
