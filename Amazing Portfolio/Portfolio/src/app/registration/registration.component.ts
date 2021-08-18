import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstname:string =""
  lastname:string=""
  username:string=""
  password:string=""
  msg:string=""
  // contactname:string=""
  // phone:string=""
  showform:boolean = false
  newform:boolean = false
  contact:Array<String> = []
  phone_number:Array<String> = Array();

  constructor() {




   }

  ngOnInit(): void {
  }

  saveValues(loginRef:NgForm){
    let login = loginRef.value;
    console.log(login)
    this.firstname=login.fname;
    this.lastname=login.lname;
    this.username=login.user;
    this.password=login.pass;

  }
   

  loginValues(newRef:NgForm){
     let signin = newRef.value;
     if(this.username==signin.user && this.password==signin.pass){
        this.msg ="Login successfull"
     }
     else{
       this.msg = "try again"
     }

   }

  clickevent(){
    this.showform=true;
  }


  showevent(){
    this.newform=true;
  }
  
  addName(nameRef:any, phnRef:any){
    //  this.contactname = nameRef.cname;
    //  this.phone=nameRef.phone;

    console.log("cname");

    let c_name = nameRef.value;
    this.contact.push(c_name);

    let phn = phnRef.value;
    this.phone_number.push(phn);

   }
    
  


}
