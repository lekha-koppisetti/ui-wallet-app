import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionsListComponent } from './transactions-list/transactions-list/transactions-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from "ngx-toastr";
import { NgToggleModule } from 'ng-toggle-button';
@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    NgToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
