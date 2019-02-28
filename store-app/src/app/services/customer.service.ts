import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _urlBase: string = "http://localhost/ApiLoja/Api";

  private EndPoint(url: string): string {
    return this._urlBase + url;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {   }

  getCustomer(id): Observable<Customer> {
    return this.httpClient.get<Customer>(this.EndPoint("/Cliente/"+id));
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.EndPoint("/Cliente"));              
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.EndPoint("/Cliente"), customer);      
  } 





}
