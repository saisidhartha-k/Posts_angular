import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:8080/forum'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getPostDetail(id: number): Observable<any> {
    const url = `${this.baseUrl}/post/${id}`;
    return this.http.get(url);
  }
}
