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

  // Login error message
  loginErrorMessage:string = "";

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  checkUser(loginRef:NgForm): void {
    let loginForm = loginRef.value;
    let curUser:any = null;
    
    // Grab the user by the inputted username
    this.userService.getUserFromId(+loginForm.username).subscribe(data=> { // User found with a matching ID
          curUser = data;

          // Check to see if they input correct data
          if (loginForm.password == curUser.password && !curUser.isLocked) { // Login successful
            this.loginErrorMessage = "";
            this.router.navigateByUrl("/userPanel");
          }
          // Account is locked
          else if (curUser.isLocked) {
            this.loginErrorMessage = "Your account has been locked. Please submit a ticket to unlock it.";
            return;
          }
          else {
            // Update the total login attempts
            curUser.attemptedLogins += 1;
            if (curUser.attemptedLogins >= 3) { // Lock the account
              curUser.isLocked = true;
              this.loginErrorMessage = "Your account has been locked. Please submit a ticket to unlock it.";
            }
            else {
              this.loginErrorMessage = "Invalid username or password.";
            }

            console.log(curUser);
            
            // Updating the database
            this.userService.updateUser(+loginForm.username, curUser).subscribe(response=> {
              console.log("Login attempts updated to " + curUser.attemptedLogins);
              console.log(response);
            },
            error=> {
              console.log("Line 57");
              console.log(error);
            });
          }

        },
        error=> {
          console.log(error);
          this.loginErrorMessage = "Invalid username or password.";
        });
  }

}
