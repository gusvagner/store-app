import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _urlBase: string = "http://localhost/ApiLoja/Api";

  private EndPoint(url: string): string {
    return this._urlBase + url;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'     
    })
  };

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.EndPoint("/Cliente"));
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.EndPoint("/Cliente"), customer, this.httpOptions);
  }


}
