import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPersistenceService } from '../services/data-persistence.service';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-news',
  templateUrl: './articles-news.component.html',
  styleUrls: ['./articles-news.component.css']
})
export class ArticlesNewsComponent implements OnInit {

  articlesNews$: Observable<any>;

  constructor(private newsapi: NewsapiService, private dataPersistenceService: DataPersistenceService) {}

  ngOnInit() {

    if (this.dataPersistenceService.selectedNewsCategory == "World News") {
      this.articlesNews$ = this.newsapi.getArticlesWorldNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "India News") {
      this.articlesNews$ = this.newsapi.getArticlesIndiaNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Business News") {
      this.articlesNews$ = this.newsapi.getArticlesBusinessNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Technology News") {
      this.articlesNews$ = this.newsapi.getArticlesTechnologyNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "General News") {
      this.articlesNews$ = this.newsapi.getArticlesGeneralNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Health News") {
      this.articlesNews$ = this.newsapi.getArticlesHealthNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Science News") {
      this.articlesNews$ = this.newsapi.getArticlesScienceNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Entertainment News") {
      this.articlesNews$ = this.newsapi.getArticlesEntertainmentNews();
    } else if (this.dataPersistenceService.selectedNewsCategory == "Sports News") {
      this.articlesNews$ = this.newsapi.getArticlesSportsNews();
    } /* else if (this.dataPersistenceService.selectedNewsCategory == "Javascript News") {
      this.articlesNews$ = this.newsapi.getArticlesJavaScriptNews();
    } */
    else if (this.dataPersistenceService.selectedNewsCategory == "Search News") {
      //this.articlesNews$ = this.newsapi.getArticlesSearchAnyNews('');
    } else {
      this.articlesNews$ = this.newsapi.getArticlesWorldNews();
      this.dataPersistenceService.selectedNewsCategory = "WORLD NEWS";
    }
  }

  searchNewsBtn(searchText: string) {
    this.articlesNews$ = this.newsapi.getArticlesSearchAnyNews(searchText);
  }
}
