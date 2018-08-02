import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'acc-summary',
  templateUrl: './cashSummary.component.html',

})
export class CashSummaryComponent {  


  accSummary=[ {
    id: 1,
    account_type: 'credit',
    previous_amount: 2708,
    actual_amount: 0 },
   {
    id: 2,
    account_type: 'cash',
    previous_amount: 6182,
    actual_amount: 0 },
   {
    id: 3,
    account_type: 'Current Account',
    previous_amount: 10777,
    actual_amount: 0 },
   {
    id: 4,
    account_type: 'Savings Account',
    previous_amount: 5473,
    actual_amount: 0 }];

  constructor(public componentIntractionService: ComponentIntractionService) {
   
   
  }

  btnGetAccsummary(){
    this.componentIntractionService.GetCashSummary('as').subscribe(res => this.reponse(res)); 
  }
 
  reponse(res:any){
    console.log(res);    
    this.accSummary= res;
    this.accSummary[2].account_type='Current Account';
    this.accSummary[3].account_type='Savings Account';
  }

}
