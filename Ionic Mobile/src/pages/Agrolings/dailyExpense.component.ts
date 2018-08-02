import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'daily-expenses',
  templateUrl: './dailyExpense.component.html',

})
export class DailyExpenseComponent {
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';


  extype=['Material','Support','Promotion','Daily Expense','Others']; 
  exmaterial=['Groundnut','KSesame','Sesamet','Coconut','Karupatti','Vellam'];
  exMode=['Cash','Personal','Current'];
  expense={
    expense_date:'',
    material_name:this.exmaterial[0],
    expense_type:this.extype[0],
    expense_mode :this.exMode[0],
    exxpense_desc:'',
    expense_amount :0
  }; 
  hideddl=false;
  
   
  constructor(public componentIntractionService: ComponentIntractionService) {
    this.dateformate(); 
    this.expense.expense_date=this.yearz+'-'+this.monthz+'-'+this.datez;
   
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

  dateChanged(){

  }

  ddlextype(){
    if(this.expense.expense_type=='Material'){
    this.exmaterial=['Groundnut','KSesame','Sesamet','Coconut','Karupatti','Vellam'];
    this.expense.material_name=this.exmaterial[1];
    this.hideddl=false;
    }
    if(this.expense.expense_type=='Support'){
    this.exmaterial=['Bottle','Lable','Cap','Inner'];
    this.expense.material_name=this.exmaterial[1];
    this.hideddl=false;
    }
    else if(this.expense.expense_type!='Support'&&this.expense.expense_type!='Material'){
      this.hideddl=true;
    }

  }
  ddlexMaterial(){
  
  }

  btnExpenseClick(){
    this.componentIntractionService.InsertExpense(this.expense).subscribe(res => this.Expensereponse(res));        
    
  }

  Expensereponse(res:any){
    alert(res);

  }
}
