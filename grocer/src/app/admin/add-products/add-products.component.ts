import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
Pname:any;
Price:any;
Quantity:any;
Discount:any;
PId:any;
message:any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }
  addProduct(productRef: any) {
    console.log(productRef);
    this.adminService.storeProductDetailsInfo(productRef).subscribe(result => this.message = result,error => this.message = error);
    
    this.Pname = "";
    this.Price = "";
    this.Quantity = "";
    this.Discount="";
    this.PId="";
  }

}
