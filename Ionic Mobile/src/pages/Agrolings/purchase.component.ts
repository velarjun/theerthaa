import { Component, OnChanges} from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'purchase-root',
  templateUrl: './purchase.component.html',

})
export class PurchaseComponent implements OnChanges {  
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';


  summaries=['Groundnut','KSesame','Sesame','Coconut','Karupatti','Vellam'];
  purchase:any={
    Type:'G',
    Weight:1,
    Price:1,
    Name:'',
    Place:'',
    DlyTransCharge:0,
    DlyTrans:'',
    TotalAmount:1,
    ActWeight:1,
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez

  };  
   
  constructor(public componentIntractionService: ComponentIntractionService) {
        
    this.dateformate(); 
    this.purchase.date_sale=this.yearz+'-'+this.monthz+'-'+this.datez;
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

  ngOnChanges() {
    console.log('Changged');  
}

  filterForeCasts(value:string){
    console.log(value);

  }
  btnPurchaseClick(event:Event){

   this.componentIntractionService.InsertPurchase(this.purchase).subscribe(res => this.reponse(res));        
  }

  reponse(Val:string){

  }

  dateChanged(){
  
  }
}
