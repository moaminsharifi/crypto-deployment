import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Currency } from 'src/app/interface/currency';
import { CurrenciesService } from 'src/app/service/currencies.service';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  // boolean state for handle is first data fetched or not
  isFetched: boolean = false;

  // currencies array pass to table to show
  currencies: Currency[] = [];

  // inject services to component
  constructor(
    private messageService: MessageService,
    private currenciesService: CurrenciesService,
    private wsService: SocketService
  ) {
    // enable price listener, update currencies info and price
    wsService.priceListener().subscribe({
      next: (data: Currency[]) => {
        this.isFetched = true;
        this.currencies = data;
      },
    });
  }

  /*
    - handle action.delete button
    - send delete request
  */
  currencyDeleteHandler(id: number): void {
    let response: any;
    this.currenciesService.deleteCurrency(id).subscribe({
      next: (values) => (response = values),
      complete: () => this.currencyDeleteCompleteHandler(id),
      error: (error) => this.currencyDeleteErrorHandler(error),
    });
  }

  // show fail message as toast
  currencyDeleteErrorHandler(error: any): void {
    this.messageService.add({
      severity: 'error',
      summary: error?.name,
      detail: error?.statusText,
    });
  }

  /*
    - show success message as toast
    - remove item from `currencies` array
  */
  currencyDeleteCompleteHandler(id: number): void {
    this.currencies = this.currencies.filter(
      (currency: any) => currency.id !== id
    );

    this.messageService.add({
      severity: 'success',
      summary: 'Currency Deleted',
      detail: `Successfully Deleted`,
    });
  }
}
