import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{SalesComponent} from '../pages/Agrolings/sales.component';
import{ReportComponent} from '../pages/Agrolings/report.component';
import{PurchaseComponent} from '../pages/Agrolings/purchase.component';
import{GrindingComponent} from '../pages/Agrolings/grinding.component';
import{DailyExpenseComponent} from '../pages/Agrolings/dailyExpense.component';
import{DailySalesComponent} from '../pages/Agrolings/dailySales.component';
import{CashSummaryComponent} from '../pages/Agrolings/cashSummary.component';
import{DeliveryComponent} from '../pages/Agrolings/delivery.component';
import{HomeComponent} from '../pages/Agrolings/home.component';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeComponent ;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeComponent  },
      { title: 'Purchase', component: PurchaseComponent },
      { title: 'Grinding', component: GrindingComponent },
      { title: 'Sales', component: SalesComponent },
      { title: 'Report', component: ReportComponent },
      { title: 'DailyExpenses', component: DailyExpenseComponent }  ,
      { title: 'DailySales', component: DailySalesComponent },
      { title: 'Account Summary', component: CashSummaryComponent  },
      { title: 'Delivery', component: DeliveryComponent  }                          
    ];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
