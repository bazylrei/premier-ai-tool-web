import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  private apiUrl = 'http://0.0.0.0:8000'; // Update to your service URL

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generate_keywords`, { params: { keyword } });
  }
}
