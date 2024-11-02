import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://0.0.0.0:8000'; // Update to your service URL

  constructor(private http: HttpClient) { }

  fetch(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search_articles`, { params: { keyword } });
  }
}
