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

  summaries=['Groundnut','Sesame','Coconut'];
  Sales={
    Type:'Groundnut',
    Kg:0,
    Price:0,
    PhoneNumber:'',
    Name:'',
    Place:'',
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez
  };  
  clsCheck=true;
  Month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  //Month={'Jan':0,'Feb':1,'Mar':2,'Apr':3,'May':4,'Jun':5,'Jul':6,'Aug':7,'Sep':8,'Oct':9,'Nov':10,'Dec':11};
  date=new Date().getMonth();

  constructor(public componentIntractionService: ComponentIntractionService) {
        
   
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
  reponse(res:any){

  }

  btnSalesClick(event:Event){
    this.clsCheck=false;
    this.componentIntractionService.InsertSales(this.Sales).subscribe(res => this.reponse(res));        
  }

  filterForeCasts(value:string){
    console.log(value);

  }
  dateChanged(){
  
  }



}
