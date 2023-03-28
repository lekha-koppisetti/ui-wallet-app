import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, skip } from 'rxjs';
import { TransactionService } from 'src/services/transaction-service/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  walletId: string = '';
  skip = 0;
  limit = 5;
  orderBy = 'createdAt';
  transactions$: Observable<any> | undefined;
  displayedColumns: string[] = ['amount', 'balance', 'createdAt', 'id'];

  sortValues = ["amount", "createdAt"];
  selected = null;


  total = 0;
  pageSize = 5;
  currentPage = 0;

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.walletId = this.route.snapshot.params['walletId'];

    this.transactions$ = this.transactionService.getTransactions(this.walletId, this.skip, this.limit, this.orderBy)
      .pipe(map(response => {
        this.total = response.total;
        return response;
      }));
  }

  getTransactions(event: any) {
    this.currentPage = event.pageIndex;
    this.transactions$ = this.transactionService.getTransactions(this.walletId, this.currentPage * this.pageSize, this.limit, this.orderBy)
      .pipe(map(response => {

        this.total = response.total;

        return response;
      }));
  }

  selectValue() {
    this.currentPage = 0;
    if(this.selected) {
      this.orderBy = this.selected;
    } else {
      this.orderBy = 'createdAt';
    }
    this.transactions$ = this.transactionService.getTransactions(this.walletId, this.currentPage * this.pageSize, this.limit, this.orderBy)
      .pipe(map(response => {
        this.total = response.total;
        return response;
      }));
  }
}
