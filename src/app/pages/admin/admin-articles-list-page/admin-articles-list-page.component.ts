import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-articles-list-page',
  templateUrl: './admin-articles-list-page.component.html',
  styleUrls: ['./admin-articles-list-page.component.css']
})
export class AdminArticlesListPageComponent {
  listOfArticles: any [] = [];
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getArticles().subscribe((articles) => {
    this.listOfArticles = articles;
    });

  }
}
