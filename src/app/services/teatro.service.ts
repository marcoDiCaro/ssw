import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeatroService {
  URL: string = "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/";
  secret: string = "ssw2022";

  constructor(private http: HttpClient) { }

  newPrenotazione(): Observable<string>{
    return this.http.get<string>(`${this.URL}new?secret=${this.secret}`);
  }

  getPrenotazione(key: string): Observable<string>{
    return this.http.get<string>(`${this.URL}get?key=${key}`);
  }
  
  setPrenotazione(key:string, teatro: any[]): Observable<string>{
    return this.http.post<string>(`${this.URL}set?key=${key}`, teatro)
  }
  
}