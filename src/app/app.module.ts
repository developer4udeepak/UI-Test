import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HierarchyComponent } from './koncepts/hierarchy/hierarchy.component';
import { OrdersComponent } from './koncepts/orders/orders.component';
import { CustomersComponent } from './koncepts/customers/customers.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainTilesComponent } from './main-tiles/main-tiles.component';
import {MatExpansionModule} from '@angular/material/expansion';

import {CdkTreeModule} from '@angular/cdk/tree';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

import {MatNativeDateModule} from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HierarchyComponent,
    OrdersComponent,
    CustomersComponent,
    PagenotfoundComponent,
    MainTilesComponent,
    HeaderComponent,
    
  
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatExpansionModule,
    CdkTreeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatTreeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
