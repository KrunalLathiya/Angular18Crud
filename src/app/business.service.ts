import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) {}

  addBusiness(
    person_name: string,
    business_name: string,
    business_gst_number: string
  ): Observable<any> {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number,
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }
  getBusinesses(): Observable<any[]> {
    return this.http.get<any[]>(this.uri);
  }

  getBusinessById(id: string): Observable<any> {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(id: string, business: any): Observable<any> {
    return this.http.post(`${this.uri}/update/${id}`, business);
  }

  deleteBusiness(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
