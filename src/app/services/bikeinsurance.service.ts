import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeinsuranceService {

  baseurl = "http://localhost:8080/bike-api/bikes"

  
  constructor(private _http:HttpClient) { }

  addBike=(bike:Bike)=>{
   return this._http.post<Bike[]>(this.baseurl,bike);

  }

  getBike =():Observable<Bike[]>=>{
      return this._http.get<Bike[]>(this.baseurl);
  }

  // http://localhost:8086/investment-api/investments/type?type=Mutual Fund
  // to get the plans by a particular type
  // to get only the types
  getByBrands = ():Observable<string[]>=>{
    let url= this.baseurl.concat("/brand/")
    
    return this._http.get<string[]>(url);

  }

  getByBikeNumber = (bikeNumber:string):Observable<Bike[]>=>{
    let url = this.baseurl.concat("/bikeNumber/")+bikeNumber
    return this._http.get<Bike[]>(url);
  }

  getById = (newbikeId:number):Observable<Bike>=>{
    let url = this.baseurl.concat("/bikeId/")+newbikeId;
    return this._http.get<Bike>(url);
  }

  getByBrand = (brands:string):Observable<Bike[]>=>{
    let url = this.baseurl.concat("/brand/")+brands
    return this._http.get<Bike[]>(url);
  }

  getAll=():Observable<Bike[]>=>{
    return this._http.get<Bike[]>(this.baseurl)
  }
}
