import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
   url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<any>(`${this.url}articles`);
  }
  getLatestArticles() {
    return this.http.get<any>(`${this.url}articles/latest`);
  }
  getArticle(id: number) {
    return this.http.get<any>(`${this.url}articles/${id}`);
  }
  createArticle(article: any, categoryId: number) {
    const url = `${this.url}categories/${categoryId}/articles`;
    return this.http.post<any>(url, article);
  }
  updateArticle(article: any, id: number) {
    const url = `${this.url}articles/${id}`;
    return this.http.put<any>(url, article);
  }
  deleteArticle(article: any, id: number) {
    const url = `${this.url}articles/${id}`;
    return this.http.delete<any>(url, article);
  }
  getCategories() {
    return this.http.get<any>(`${this.url}categories`);
  }
}
