import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';


import {ReportComponent} from '../pages/Agrolings/report.component';
import {GrindingComponent} from '../pages/Agrolings/grinding.component';
import {SalesComponent} from '../pages/Agrolings/sales.component';
import {PurchaseComponent} from '../pages/Agrolings/purchase.component';
import {DailySalesComponent} from '../pages/Agrolings/dailySales.component';
import {DailyExpenseComponent} from '../pages/Agrolings/dailyExpense.component';
import{CashSummaryComponent} from '../pages/Agrolings/cashSummary.component';
import{DeliveryComponent} from '../pages/Agrolings/delivery.component';
import{HomeComponent} from '../pages/Agrolings/home.component';

import { ComponentIntractionService } from '../pages/Agrolings/ComponentIntraction.Service';



//import {enableProdMode} from '@angular/core';
//enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    ReportComponent,
    GrindingComponent,
    SalesComponent,
    PurchaseComponent,
    DailySalesComponent,
    DailyExpenseComponent,
    CashSummaryComponent,
    DeliveryComponent,HomeComponent

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportComponent,
    GrindingComponent,
    SalesComponent,
    PurchaseComponent,
    DailyExpenseComponent,
    DailySalesComponent,
    CashSummaryComponent,
    DeliveryComponent,
    HomeComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ComponentIntractionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
