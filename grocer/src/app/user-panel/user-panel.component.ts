import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  //Strings used for the html page
  orderTable:string="";
  editResponse:string="";
  currentFunds:string="$"

  money:number = 5; //CHANGE THIS LATER WHEN WE CAN GET THE ACTUAL VALUE

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

  updateCurrentFunds(): void{
    //get the funds currently on the profile.

    //By default, let's assume it's five bucks
    this.currentFunds="$"+this.money.toString();
  }

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.orderStatus();
    this.updateCurrentFunds();
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
    let additionalFunds = additionalFundsForm.value.funds;
    this.money += +additionalFunds;
    this.updateCurrentFunds();
  }

}
