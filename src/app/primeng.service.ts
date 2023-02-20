import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';
@Injectable({
  providedIn: 'root'
})
export class PrimengService {
  
  constructor(private http:HttpClient) {}
    public get(){
     return this.http.get<Model[]>("http://dev.mobito.co.in/api/on-board-manager//botdetail/list/1787");
    }
}
