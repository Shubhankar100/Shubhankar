import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(public router:Router, private userService:UserService, private route:ActivatedRoute) { }

  //Strings used for the html page
  orderTable:string="";
  editResponse:string="";
  currentFunds:string="$"
  fundsErrorMessage:string="";

  userId:number=this.route.snapshot.params["id"];


  //Function used to get all the user's orders
  orderStatus(): void {
    let tableHead = "<table><tr><th>Order ID</th><th>Order Status</th></tr>";
    let tableRowStart = "<tr><td>";
    let tableRowMid = "</td><td>";
    let tableRowEnd = "</td></tr>";
    let tableEnd = "</table>"
    let tableContents = tableHead;

    //Insert an service function that grabs the orders

    //This next part might need to be done *inside* the subscribe function
    //It essentially consists of making a table that will be shown of the statuses
    let Orders; //May need to be defined 

    //Order Id may be replaced by whatever method we use to recognize orders

    // for (let order of Orders){
    //   let newRow = tableRowStart+order._userId+tableRowMid+order.status+tableRowEnd;

    //   tableContents+=newRow;
    // }

    this.orderTable=tableContents+tableEnd;
  }

  getStartingFunds(): void{
    let curUser:any = null;
    //get the funds currently on the profile.
    this.userService.getUserFromId(this.userId).subscribe(data=>{
      //we have found the user.
      curUser = data;
      this.currentFunds="$"+curUser.funds.toString()
    },
    error=> {
      console.log(error);
    })

    //By default, let's assume it's five bucks
  }


  ngOnInit(): void {
    this.orderStatus();
    this.getStartingFunds();
  }

  //Helper function to check if edit profile stuff is empty or not
  checkIfEmpty(newProfileStuff:any): boolean {
    if(newProfileStuff.password=="" && newProfileStuff.address=="" && newProfileStuff.email=="" && newProfileStuff.phone==""){
      return true;
    }
    else if(newProfileStuff.password==null && newProfileStuff.address==null && newProfileStuff.email==null && newProfileStuff.phone==null){
      return true;
    }
    else return false;
  }

  //function used to edit the profile of the user
  editProfile(editUserRef:NgForm): void {
    let newProfileValue = editUserRef.value;
    editUserRef.resetForm();
    console.log(typeof newProfileValue);

    if(newProfileValue.password!=newProfileValue.repassword){
      this.editResponse="Passwords do not match!"
    }
    else if (this.checkIfEmpty(newProfileValue)){
      this.editResponse="No fields filled!"
    }
    else{
      //Do stuff with info. It will parse what things are there or not.

      this.editResponse="Profile updated!"
    }
  }

  //Allows the user to add funds.
  updateFunds(additionalFundsForm:NgForm):void {
    let curUser:any = null;
    let additionalFunds = additionalFundsForm.value.funds;
    this.userService.getUserFromId(this.userId).subscribe(data=>{
      //we have found the user.
      curUser = data;
      curUser.funds+=additionalFunds;
      //update their funds
      this.userService.updateUser(this.userId,curUser).subscribe(response=> {
        this.currentFunds="$"+curUser.funds.toString();
        this.fundsErrorMessage="";
      })
    },
    error=> {
      //If there is an error
      console.log(error);
      this.fundsErrorMessage="Funds failed to be updated."
    })
  }

}
