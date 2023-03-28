import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions-list/transactions-list/transactions-list.component';

const routes: Routes = [ 
  { path: 'wallet-app', component: AppComponent },
  { path: 'transactions/:walletId', component: TransactionsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
