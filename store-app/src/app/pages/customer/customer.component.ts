import { Component, OnInit, ViewChild, NgModule,  Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from '../../services/customer.service';
import { ErrorMsgComponent } from '../../shared/error-msg/error-msg.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Customer;
  customers: Customer[];

  msg : string;

  constructor(private customerService: CustomerService) {
    this.customer = new Customer();
   }

  ngOnInit() {
    this.GetCustomerList();    
  }

  GetCustomer(customer) {
    this.customerService.getCustomer(customer.Id)
      .subscribe((customerAnswer: Customer) => {
        this.customer = customerAnswer;
      })
  }

  GetCustomerList() {
    this.customerService.getCustomerList()
      .subscribe((customersAnswer: Customer[]) => {        
        this.customers = customersAnswer;        
      }) 
  }

  SaveCustomer() {
    this.customerService.saveCustomer(this.customer)
      .subscribe((customerSaved: Customer) => {
        this.GetCustomerList();    
        this.msg = "Costumer saved: " + customerSaved.Nome;
      })         
  }

  EditCustomer() {

  }

}
