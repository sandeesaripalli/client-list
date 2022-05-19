import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Client } from '@contextlabs/data';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  public baseUrl = "http://localhost:5000/clients"
  
  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(map((response:Client[])=>{

      return response;
    }))
  }
  
}
