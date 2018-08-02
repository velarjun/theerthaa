import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'report-root',
  templateUrl: './report.component.html',

})
export class ReportComponent {  
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';

  summaries=['Groundnut','KSesame','Sesame','Coconut','Karupatti','Vellam'];
  selectedType={Tcake:0,SCake:0,BCake:0,TOil:0};
  report={
    Groundnut:{Tcake:0,SCake:0,BCake:0,TOil:0},
    KSesame:{Tcake:0,SCake:0,BCake:0,TOil:0},
    Sesame:{Tcake:0,SCake:0,BCake:0,TOil:0},
    Coconut:{Tcake:0,SCake:0,BCake:0,TOil:0},
    Karupatti:{Tcake:0,SCake:0,BCake:0,TOil:0},
    Vellam:{Tcake:0,SCake:0,BCake:0,TOil:0},
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez
  };  



  constructor(public componentIntractionService: ComponentIntractionService) {
    this.dateformate(); 
    this.report.date_sale=this.yearz+'-'+this.monthz+'-'+this.datez;    
    //this.componentIntractionService.GetReport().subscribe(res => this.reponse(res));              
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
    if(res.Results!=undefined){
      this.report=res.Results;
    }    
  
  }




  filterForeCasts(value:any){
    switch(value)
    {
      case "Groundnut":
      this.selectedType=this.report.Groundnut;
      break;      
      case "KSesame":
      this.selectedType=this.report.KSesame;
      break;      
      case "Sesame":
      this.selectedType=this.report.Sesame;
      break;      
      case "Coconut":
      this.selectedType=this.report.Coconut;
      break;      
      case "Karupatti":
      this.selectedType=this.report.Karupatti;
      break;      
      case "Vellam":
      this.selectedType=this.report.Vellam;
      break;      
    }  
  }
  btnReportClick(event:Event){


  }

  dateChanged(){
  
  }
}
