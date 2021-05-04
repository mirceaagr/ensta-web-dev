import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../components/products/product.model';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public testVar = "dadadasdasd"
  public products:IProduct[] = [];

  constructor(private http:HttpClient) { }

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${API_URL}products`);
  }

  getProduct(id:number):Observable<IProduct> {
    return this.http.get<IProduct>(`${API_URL}products/${id}`);
  }

  addProduct(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${API_URL}products`, product);
  }

  editProduct(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`${API_URL}products/${product.id}`, product);
  }

  getClients():Observable<any> {
    return this.http.get<any>(`${API_URL}clients`);
  }

  getSettings():Observable<any> {
    return this.http.get<any>(`${API_URL}settings`);
  }
}
