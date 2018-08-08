import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'sales-root',
  templateUrl: './sales.component.html',

})
export class SalesComponent {  
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';

   CashTransferType=['Cash','Personal','Current'];
   transferDetails={
    transferFrom:'',
    transferTo:'',
    transferAmount:0,
    transferDate:this.yearz+'-'+this.monthz+'-'+this.datez
  };  
  clsCheck=true;
  date=new Date().getMonth();

  constructor(public componentIntractionService: ComponentIntractionService) {
        
   
  this.dateformate(); 
    this.transferDetails.transferDate=this.yearz+'-'+this.monthz+'-'+this.datez;
  }

  dateformate(){
    if(this.dd<10)
       this.datez='0'+this.dd;
    else 
      this.datez=''+this.dd;
    if(this.mm<10)   
      this.monthz='0'+this.mm;
    else 
      this.monthz=''+this.mm; 
    this.yearz=''+this.yyyy;
  }
  reponse(res:any){

  }

  btnTransferClick(event:Event){
    this.clsCheck=false;
    this.componentIntractionService.InsertSales(this.Transfer).subscribe(res => this.reponse(res));        
  }

  filterForeCasts(value:string){
    console.log(value);

  }
  dateChanged(){
  
  }



}
