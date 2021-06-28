import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/`);
  }
  getByName(caracteres: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/name/${caracteres}`);
  }
  getEnterpriseByName(caracteres: string, id): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/${id}/enterprise/name/${caracteres}`);
  }
  getGeneralTotals(): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/totals`);
  }

  getById(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getTotalsByCompany(id): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/${id}/totals`);
  }
  getEnterprisesByClient(id): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/${id}/enterprise`);
  }
}
