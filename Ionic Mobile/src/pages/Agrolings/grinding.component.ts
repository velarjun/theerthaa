import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'grind-nut',
  templateUrl: './grinding.component.html',

})
export class GrindingComponent {

  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';


  title = 'app';
  summaries=['Groundnut','KSesame','Sesamet','Coconut','Karupatti','Vellam'];
  grinding={
    Type:'G',
    Weight:1,
    extraItems:['Oil','Karupatti','Vellam'],
    extraKg:0,
    Oil:0,
    Cake:0,
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez

  };  
   
  constructor(public componentIntractionService: ComponentIntractionService) {
        
    this.dateformate(); 
    this.grinding.date_sale=this.yearz+'-'+this.monthz+'-'+this.datez;
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



  filterForeCasts(value:string){
    console.log(value);

  }

  btnGrindingClick(){
    this.componentIntractionService.InsertGrinding(this.grinding).subscribe(res => this.reponse(res));        
    
  }

  reponse(res:any){

  }
}
