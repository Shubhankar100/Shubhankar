import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  orderFlag:boolean=false;
  profileFlag:boolean=false;
  fundsFlag:boolean=false;


  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  orderStatus(UserId:string){
    let tableHead = "<tr><th>Order ID</th><th>Order Status</th></tr>";
    let tableRowStart = "<tr><td>";
    let tableRowMid = "</td><td>";
    let tableRowEnd = "</td></tr>";
    let tableContents = tableHead;

    //Insert an service function that grabs the orders

    //This next part might need to be done *inside* the subscribe function
    //It essentially consists of making a table that will be shown of the statuses
    let Orders; //May need to be defined 

    //Order Id may be replaced by whatever method we use to recognize orders

    // for (let order of Orders){
    //   let newRow = tableRowStart+order.id+tableRowMid+order.status+tableRowEnd;

    //   tableContents+=newRow;
    // }

    //document.getElementById("order_table").innerHTML=tableContents
  }

}
