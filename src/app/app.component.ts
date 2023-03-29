import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Transaction } from 'src/models/transaction';
import { Wallet } from 'src/models/wallet';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { TransactionService } from 'src/services/transaction-service/transaction.service';
import { WalletServiceService } from 'src/services/wallet-service/wallet-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  config = {
    value: true,
    name: '',
    disabled: false,
    height: 25,
    width: 65,
    margin: 3,
    fontSize: 10,
    speed: 300,
    color: {
      checked: 'black',
      unchecked: 'black',
    },
    switchColor: {
      checked: 'white',
      unchecked: 'white',
    },
    labels: {
      unchecked: 'Debit',
      checked: 'Credit',
    },
    checkedLabel: '',
    uncheckedLabel: '',
    fontColor: {
      checked: 'white',
      unchecked: 'white',
    },
  };
  
  showTransactionForm = false;
  transactionAmount = 0;
  transactionDescription = '';

  walletInfo: any;
  walletName: string = '';
  walletBalance: number = 0;

  constructor(private walletService: WalletServiceService,
              private localStorage: LocalStorageService,
              private transactionService : TransactionService,
              private toastr: ToastrService,
              private router: Router,
              public route: ActivatedRoute) {
                this.router.navigate(['/wallet-app']);
  }

  ngOnInit() {
    this.walletInfo = this.localStorage.getItem('walletInfo');
    if(this.walletInfo) {
      this.showTransactionForm = true;
    }
  }

  onSubmitTransaction() {
    
    if(this.transactionAmount == 0 ) {
      this.toastr.error('Amount can\'t be zero', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      return;
    }

    if(this.transactionAmount < 0 ) {
      this.toastr.error('Amount can\'t be negative', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      return;
    }
    let transactionAmount = this.transactionAmount;
    if(!this.config.value) {
      transactionAmount = this.transactionAmount * -1;
    }
    let transactionObj: Transaction = {
      amount: transactionAmount,
      description: this.transactionDescription
    }
    this.transactionService.addTransaction(this.walletInfo.id, transactionObj)
        .subscribe((data: any) => {
        this.walletInfo.balance = data?.balance;
        this.localStorage.setItem("walletInfo", this.walletInfo);
        this.toastr.success('Transaction is successful', 'Success', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right'
        });
    });
  }

  onSubmitWalletInfo() {
    if(this.walletName.trim() == '') {
      this.toastr.error('Name should be mandatory', '', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
      return;
    }
    let walletObj: Wallet = {
      name: this.walletName.trim(),
      balance: this.walletBalance
    }
    this.walletService.addWallet(walletObj).subscribe((data: any) => {
      this.walletInfo = data;
      this.localStorage.setItem("walletInfo", this.walletInfo);

      this.showTransactionForm = true;
      this.toastr.success('Wallet is created successfully', 'Success', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    });
  }

  goToTransPage() {
    this.router.navigate(['/transactions/'+this.walletInfo.id]);
  }
}
// hjdg