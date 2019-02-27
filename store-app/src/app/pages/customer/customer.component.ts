import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
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

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.GetCustomerList();    
  }

  GetCustomerList() {
    this.customerService.getCustomerList()
      .subscribe((customersAnswer: Customer[]) => {
        console.log(customersAnswer);
        //this.customers = customersAnswer;        
      }) 
  }


/*
  customer : Customer;
  customers: Customer[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.GetCustomerList();    
  }

  GetCustomerList() {
    this.customerService.getCustomerList()
      .subscribe((customersAnswer: Customer[]) => {
        this.customers = customersAnswer;        
      })  , () => { this.errorMsgComponent.setError('erro ao listar'); });
  }

  SaveCustomer(customer : Customer) {
    console.log(customer)

    this.customerService.saveCustomer(customer)    
      .subscribe(customersAnswer => 
        this.customers.push(customersAnswer)              
      ) 
  }

  New() {
    this.customer = null;    
  } 
 */
}
