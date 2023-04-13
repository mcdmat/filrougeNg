import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent {
  public id!: number;
  currentArticle!: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getArticleByIdFromService(this.id);
  }

  getArticleByIdFromService(id: number) {
    this.apiService.getArticle(id).subscribe((result) => {
      this.currentArticle = result;
    });
  }
}
