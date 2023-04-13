import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-articles-list-page',
  templateUrl: './articles-list-page.component.html',
  styleUrls: ['./articles-list-page.component.css'],
})
export class ArticlesListPageComponent {
  listOfArticles: any [] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getArticlesFromService();
  }

  getArticlesFromService(): void {
    this.apiService.getArticles().subscribe((result) => {
      this.listOfArticles = result;
      });
}
}
