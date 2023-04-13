import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AdminMenuPageComponent } from './pages/admin/admin-menu-page/admin-menu-page.component';
import { AdminArticlesListPageComponent } from './pages/admin/admin-articles-list-page/admin-articles-list-page.component';
import { AdminArticlePageComponent } from './pages/admin/admin-article-page/admin-article-page.component';
import { AdminCreateArticlePageComponent } from './pages/admin/admin-create-article-page/admin-create-article-page.component';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesListPageComponent,
    ArticlePageComponent,
    AdminMenuPageComponent,
    AdminArticlesListPageComponent,
    AdminArticlePageComponent,
    AdminCreateArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
