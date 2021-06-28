import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/enterprise`);
  }
  getByName(caracteres: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/enterprise/name/${caracteres}`);
  }

  getTotalsByEnterprise() {}

  getById() {}

  getEnterprisesByCompany() {}
}
