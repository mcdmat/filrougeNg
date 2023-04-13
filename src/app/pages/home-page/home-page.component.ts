import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  listOfArticles: any [] = [];
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.getLatestArticlesFromService();
  }
  getLatestArticlesFromService() {
    this.apiService.getLatestArticles().subscribe((articles) => {
      this.listOfArticles = articles;
      });
  }
}
