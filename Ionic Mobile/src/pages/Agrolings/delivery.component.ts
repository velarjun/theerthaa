import { Component } from '@angular/core';
import { ComponentIntractionService } from './ComponentIntraction.Service';
@Component({
  selector: 'delivery-root',
  templateUrl: './delivery.component.html',

})
export class DeliveryComponent {
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; 
  yyyy = this.today.getFullYear();  
   datez='';
   monthz='';
   yearz='';

  summaries=['Groundnut','KSesame','Sesamet','Coconut','Karupatti','Vellam'];
  Persons=['AV','Vel','Siva','Arun','JP','Thilak','Dheep','Sathish','Shiprocket','Wama'];
  Items=['Groundnut','KSesame','Sesamet','Coconut','Karupatti','Vellam'];
  Quantity=['16L','5L','1L','500ML'];
  orderItem=[];
  orderDetails=[];
  hideDeliveryOrder=false;
  hidedlryViewIndi=true;
  delivery={
    customer_name:'',
    customer_address:'',
    deliv_person:'Shiprocket',
    phone_number:'',
    date_sale:this.yearz+'-'+this.monthz+'-'+this.datez,
    deliv_credit_person:'',
    deliv_item:'',
    deliv_quantity:'',
    deliv_count:''
  };  
   
  constructor(public componentIntractionService: ComponentIntractionService) {
        
    this.dateformate(); 
    this.delivery.date_sale=this.yearz+'-'+this.monthz+'-'+this.datez;
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

  btnDeliveryClick(){
    this.componentIntractionService.InsertDelivery(this.delivery).subscribe(res => this.Deliveryreponse(res));        
    
  }

  btnaddItemClick(){
    this.orderItem.push({Items:this.delivery.deliv_item,Quantity:this.delivery.deliv_quantity,Count:this.delivery.deliv_count});
    this.delivery.deliv_item=this.delivery.deliv_quantity=this.delivery.deliv_count='';
  }
  dateChanged(){
    this.componentIntractionService.GetDelivery(this.delivery).subscribe(res => this.DeliveryViewreponse(res));       
  }

  Deliveryreponse(res:any){

  }

  DeliveryViewreponse(res){
    this.orderDetails=[{Name:'AV',PhoneNumber:'12222223',Ordera:[{item:'G',Quantity:'1L',Count:'2'}]},{Name:'Vel',PhoneNumber:'12233',Ordera:[{item:'G',Quantity:'12L',Count:'2'},{item:'KS',Quantity:'12L',Count:'2'}]}];    
  }


  btnDeliveryOption(){
    this.hideDeliveryOrder=!this.hideDeliveryOrder;
    this.orderDetails=[{Name:'AV',PhoneNumber:'12222223',Ordera:[{item:'G',Quantity:'1L',Count:'2'}]},{Name:'Vel',PhoneNumber:'12233',Ordera:[{item:'G',Quantity:'12L',Count:'2'},{item:'KS',Quantity:'12L',Count:'2'}]}];

  }

  btnviewDelivery(num:number){
    try{
      this.orderItem=[];
    var dummy=[];
    this.orderDetails.forEach(function (value) {
     if(value.PhoneNumber==num){
       value.Ordera.forEach(function(val){
        dummy.push(val);        
        console.log(val);
       });      
     }
    });    
    this.orderItem=dummy;
    }
    catch(exception){

    } 
  }
}
