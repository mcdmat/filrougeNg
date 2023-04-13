import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-article-page',
  templateUrl: './admin-article-page.component.html',
  styleUrls: ['./admin-article-page.component.css'],
})
export class AdminArticlePageComponent {
  id!: number;
  currentArticle!: any;

  articleForm = this.formBuilder.group({
    title: [''],
    content: [''],
    slug: [''],
  });
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getArticleByIdFromService(this.id);
  }

  getArticleByIdFromService(id: number) {
    this.apiService.getArticle(id).subscribe((result) => {
       this.articleForm.patchValue(result);
      this.currentArticle = result;
    });
  }
  onSubmit(id: number) {
    this.currentArticle = this.articleForm.value;
    this.apiService
      .updateArticle(this.currentArticle, id)
      .subscribe()
        alert('vous avez modifié l\'article');
      };
  
  deleteArt(id: number) {
    this.currentArticle = this.articleForm.value;
    this.apiService.deleteArticle(this.currentArticle, id).subscribe();
    alert('vous avez supprimé l\'article');
  }
}
