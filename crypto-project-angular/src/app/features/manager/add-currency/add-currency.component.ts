import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CurrenciesService } from 'src/app/service/currencies.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
})
export class AddCurrencyComponent {
  // modal visibility
  addCurrencyModalVisibility: boolean = false;

  // set request status
  isLoadingRequest: boolean = false;

  // input form value
  currencyName: string = '';
  email: string = '';
  description: string = '';

  // error status
  emailFieldError: boolean = false;
  nameFieldError: boolean = false;

  // error's messages
  inputErrorMessages: string[] = [];

  // save request resault from `next` fn to pass for `complete` fn
  reqResult: any;

  // import services into component
  constructor(
    private messageService: MessageService,
    private currenciesService: CurrenciesService
  ) {}

  // reset Errors state
  resetInputErrors(): void {
    // clear errors
    this.emailFieldError = false;
    this.nameFieldError = false;
    this.inputErrorMessages = [];
  }

  // reset input form state
  resetClassStateValue(): void {
    // set form values to null
    this.email = '';
    this.currencyName = '';
    this.description = '';

    // clear errors
    this.resetInputErrors();
  }

  // add fab button handler to open modal
  addCurrencyBtnHandler(): void {
    // resetStateValues
    this.resetClassStateValue();

    // set modal visible
    this.addCurrencyModalVisibility = true;
  }

  // validate form and set `inputErrorMessages` Array
  formValidator(name: string, email: string): boolean {
    let error: boolean = true;

    // validation for name -> must between 3 and 15 characters
    const nameCheck = this.nameInputValidator(name);
    if (nameCheck !== true) {
      error = false;
      this.nameFieldError = true;
      this.inputErrorMessages.push(String(nameCheck));
    }

    // email validator
    const emailCheck = this.emailInputValidator(email);
    if (emailCheck !== true) {
      error = false;
      this.emailFieldError = true;
      this.inputErrorMessages.push(String(emailCheck));
    }

    return error;
  }

  // validate email -> return string IF its not at good formation
  emailInputValidator(email: string): string | boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? true
      : 'Wrong Email';
  }

  // validate name -> return string IF its not at good formation
  nameInputValidator(name: string): string | boolean {
    return name.length < 3 || name.length > 10
      ? 'Name Must Between 3 - 10 characters'
      : true;
  }

  // Modal `Add` Button hanlder for submit
  submitFormHandler(): void {
    this.resetInputErrors();
    const validation = this.formValidator(this.currencyName, this.email);

    if (validation) {
      this.currenciesService
        .insertCurrency({
          name: this.currencyName,
          email: this.email,
          description: this.description,
        })
        .subscribe({
          next: (data) => this.requestMiddlewareHandler(data),
          error: (e) => this.onFailRequestHandler(e),
          complete: () => this.onSuccessRequestHandler(),
        });
    }
  }

  // NEXT -> handle `next` prop of httpClient subscriber
  requestMiddlewareHandler(data: any) {
    this.addCurrencyModalVisibility = false;
    this.reqResult = data;
  }

  // COMPLETE -> handle `complete` prop of httpClient subscriber
  onSuccessRequestHandler() {
    this.messageService.add({
      severity: 'success',
      summary: 'Currency Added',
      detail: `${this.reqResult?.name} Added Successfully`,
    });
  }
  // ERROR -> handle `error` prop of httpClient subscriber
  onFailRequestHandler(error: any) {
    switch (error.status) {
      case 409:
        this.messageService.add({
          severity: 'error',
          summary: 'Duplicate',
          detail: `Currency added Before`,
        });
        break;
      default:
        this.messageService.add({
          severity: 'error',
          summary: error.name,
          detail: error.statusText,
        });
        break;
    }
  }
}
