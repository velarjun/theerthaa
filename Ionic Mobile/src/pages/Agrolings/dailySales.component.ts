import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'daily-sales',
  templateUrl: './dailySales.component.html',

})
export class DailySalesComponent {
  Persons=['AV','Vel','Siva','Arun','JP','Thilak','Dheep','Sathish'];

   today = new Date();
   dd = this.today.getDate();
   mm = this.today.getMonth()+1; 
   yyyy = this.today.getFullYear();  
    datez='';
    monthz='';
    yearz='';
  Sales={
    cash_sale:0,
    card_sale:0,
    person_sale:'Siva',
    credit_sale:0,
    paytm_sale:0,
    current_acc_sale:0,
    personal_acc_sale:0,
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez
  };  
   
  constructor(public componentIntractionService: ComponentIntractionService) {    
    console.log(this.dd);
    this.dateformate(); 
    this.Sales.date_sale=this.yearz+'-'+this.monthz+'-'+this.datez;
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

  ddlPersonChange(){
    try{
      this.Sales={
        cash_sale:0,
        card_sale:0,
        person_sale:'',
        credit_sale:0,
        paytm_sale:0,
        current_acc_sale:0,
        personal_acc_sale:0,
        date_sale:this.Sales.date_sale
      };  
    }
    catch(exception)
    {
      console.log(exception);
    }  
  }

  filterForeCasts(){
    try{
      this.Sales={
        cash_sale:0,
        card_sale:0,
        person_sale:'',
        credit_sale:0,
        paytm_sale:0,
        current_acc_sale:0,
        personal_acc_sale:0,
        date_sale:this.Sales.date_sale
      };  
    }
    catch(exception)
    {
      console.log(exception);
    }  
  }

  btnSalesClick(){
    try{
    this.componentIntractionService.InsertDailySales(this.Sales).subscribe(res => this.btnSalesClickreponse(res));        
    }
    catch(exception){
      this.filterForeCasts();
      console.log(exception);
    }
    
  }
  btnSalesUpdate(){
    try{
   this.componentIntractionService.updateDailySales(this.Sales).subscribe(res => this.btnSalesUpdatereponse(res));        
  }
  catch(exception){
    this.filterForeCasts();
    console.log(exception);
  }
  }
  
  btnSalesUpdatereponse(res:any){
    try{
      alert(res);
    }
    catch(exception){
      console.log(exception);
    }      
  }

  getDatereponse(res:any){
    try{
      console.log(res);
      if(res.nodata!=undefined){
        this.filterForeCasts();
        alert(res.nodata);
      }
      else{
        console.log('-------------------------------------------Before------------------------------------------');        
        console.log(this.Sales);
        console.log('-------------------------------------------end------------------------------------------');        
        this.Sales=res;
        console.log('-------------------------------------------afer- his.Sales-----------------------------------------');        
        console.log(this.Sales);
        console.log('-------------------------------------------afer- his.Sales-----------------------------------------');        
        console.log('-------------------------------------------afer- res-----------------------------------------');        
        console.log(res);
      }
    }
    catch(exception){
      console.log(exception);
    }      
  }

  btnSalesClickreponse(res:any){
    try{          
      alert(res);
      this.filterForeCasts();
    }
    catch(exception){
      console.log(exception);
    }
    

  }

  dateChanged(){
    try{     
     this.componentIntractionService.GetDailyReport(this.Sales).subscribe(res => this.getDatereponse(res));
    }
    catch(exception)
    {
      console.log(exception);
    }
    
  }
}
