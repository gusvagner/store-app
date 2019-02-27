import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { IndexComponent } from './pages/index/index.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: "", component: AppComponent },
  { path: "", redirectTo: "Index", pathMatch: 'full'},
  { path: "Index", component: IndexComponent },
  { path: "Customer", component: CustomerComponent }    
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
