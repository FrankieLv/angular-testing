import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Covid19TableComponent } from './angular-service-provider/covid19-table/covid19-table.component';
import { Covid19CaseServiceService } from './angular-service-provider/service/covid19-case-service.service';


@NgModule({
  declarations: [
    AppComponent,
    Covid19TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Covid19CaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
