// import module's
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

// import service's
import { MessageService } from 'primeng/api';

// import component's
import { AppComponent } from './app.component';
import { ContainerComponent } from './features/manager/container/container.component';
import { HeaderComponent } from './features/manager/header/header.component';
import { TableComponent } from './features/manager/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { AddCurrencyComponent } from './features/manager/add-currency/add-currency.component';
import { NothingToShowComponent } from './components/nothing-to-show/nothing-to-show.component';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    TableComponent,
    TitleComponent,
    AddCurrencyComponent,
    NothingToShowComponent,
    LoadingSkeletonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    HttpClientModule,
    SpeedDialModule,
    TableModule,
    SkeletonModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
