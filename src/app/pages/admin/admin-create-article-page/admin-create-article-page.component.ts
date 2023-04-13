import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-create-article-page',
  templateUrl: './admin-create-article-page.component.html',
  styleUrls: ['./admin-create-article-page.component.css'],
})
export class AdminCreateArticlePageComponent {
  catId!: number;
  article: any;
  categories!: any[];
  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    slug: ['', Validators.required],
    categoryId: [0, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe((response: any) => {
      this.categories = response;
      console.log(this.articleForm);
      
    });
  }
  onSubmit(id: number) {
    this.article = this.articleForm.value;
    this.apiService.createArticle(this.article, id).subscribe();
    alert('Article crée');
  }
}
