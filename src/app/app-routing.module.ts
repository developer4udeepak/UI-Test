import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './koncepts/customers/customers.component';
import { HierarchyComponent } from './koncepts/hierarchy/hierarchy.component';
import { OrdersComponent } from './koncepts/orders/orders.component';
import { LoginComponent } from './login/login.component';
import { MainTilesComponent } from './main-tiles/main-tiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component: LoginComponent 
  },
 {
   path:'tiles' , component: MainTilesComponent,children: [
    {
      path:'heirarchy' , component: HierarchyComponent
    },
    {
      path:'orders' , component: OrdersComponent
    },
    {
      path:'customers' , component: CustomersComponent
    }
    ]
    
 },
 
 {path: 'pagenotfound', component: PagenotfoundComponent},
 {path: '**', redirectTo: '/pagenotfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
