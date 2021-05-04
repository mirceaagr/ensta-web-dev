import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBillItem } from '../components/bills/bill-item.model';
import { IBill } from '../components/bills/bill.model';
import { IProduct } from '../components/products/product.model';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${API_URL}products`);
  }

  public getProduct(id:number):Observable<IProduct> {
    return this.http.get<IProduct>(`${API_URL}products/${id}`);
  }

  public postProduct(product:IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${API_URL}products`, product)
  }

  public postBill(bill:IBill): Observable<IBill> {
    return this.http.post<IBill>(`${API_URL}bills`, bill);
  }

  public postOrUpdateBill(bill:IBill):Observable<IBill> {
    return this.http[bill.id == null ?  'post' : 'put']<IBill>(`${API_URL}bills/${bill.id || ''}`, bill);
  }

  public getBill(id:number): Observable<IBill> {
    return this.http.get<IBill>(`${API_URL}bills/${id}?_embed=items`);
    
  }

  public postBillItems(item:IBillItem): Observable<IBillItem> {
    return this.http.post<IBillItem>(`${API_URL}items`, item);
  }

  public deleteBillItem(itemId) {
    return this.http.delete(`${API_URL}items/${itemId}`)
  }

  public postOrUpdateBillItems(item:IBillItem): Observable<IBillItem> {
    return this.http[item.id == null ?  'post' : 'put']<IBillItem>(`${API_URL}items/${item.id || ''}`, item);
  }

  

  public putProduct(product:IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${API_URL}products/${product.id}`, product)
  }

  public deleteProduct(id:number): Observable<any> {
    return this.http.delete<number>(`${API_URL}products/${id}`)
  }

  public getClients():Observable<any> {
    return this.http.get<any>(`${API_URL}clients`);
  }

  public getSettings():Observable<any> {
    return this.http.get<any>(`${API_URL}settings`);
  }

  public getBillsWithClients():Observable<IBill[]> {
    return this.http.get<IBill[]>(`${API_URL}bills/?_expand=client`); // the requests I've prepared for you in requests.http in the backend part
  }
}
