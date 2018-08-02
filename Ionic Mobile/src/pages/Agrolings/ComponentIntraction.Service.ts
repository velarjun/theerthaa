import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from 'rxjs';

 
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 





@Injectable()
export class ComponentIntractionService {
  constructor(public http: Http) {
  }

  URL='http://agrolings.com:3005';

  private subject = new Subject();

  public addressValues: Subject<any> = new BehaviorSubject<any>('initial');
  public currentMessage = this.addressValues.asObservable();
  addressFinderValuesSet(text: any) {
    console.log(text);
    this.addressValues.next(text);
  }



  public sendMessage(message: string) {
    this.subject.next(message);
  }

  public clearMessage() {
    this.subject.next();
  }


  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

 


  InsertPurchase(purchase:{}) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { purchase: purchase } });
    return this.http.post(this.URL+'/InsertPurchase', purchase, options)
    .map(res => res.json());
  }

  InsertGrinding(Grinding:{}) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Grinding: Grinding } });
    return this.http.post(this.URL+'/InsertGrinding', Grinding, options)
      .map(res => res.json());
  }

  GetReport() {
    return this.http.get(this.URL+'/GetReport')
      .map(res => res.json());

  }

  InsertSales(Sales:{}) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/InsertSales', Sales, options)
      .map(res => res.json());
  }

  InsertDailySales(Sales:{}) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/InsertDailySales', Sales, options)
      .map(res => res.json());
  }

  GetDailyReport(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/GetDailyReport', Sales, options)
      .map(res => res.json());

  }



  updateDailySales(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/updateDailySales', Sales, options)
      .map(res => res.json());

  }

  GetCashSummary(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/GetCashSummary', Sales, options)
      .map(res => res.json());

  }

  
  InsertExpense(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/InsertExpense', Sales, options)
      .map(res => res.json());
  }
  
    
  InsertDelivery(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/InsertDelivery', Sales, options)
      .map(res => res.json());
  }
  GetDelivery(Sales:{}){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, body: { Sales: Sales } });
    return this.http.post(this.URL+'/GetDelivery', Sales, options)
      .map(res => res.json());
  }
  




  


}
