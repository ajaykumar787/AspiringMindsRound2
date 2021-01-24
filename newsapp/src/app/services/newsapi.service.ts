import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPersistenceService } from './data-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  //api_key = '5e3a5e575b1f4feab932756cd35d9120';
  //api_key = '32b25636f4c34134bb07fbea51feb241';
  api_key = 'e31d8cc7d5754882bb1cb7380ec51565';

  constructor(private http: HttpClient, private dataPersistenceService: DataPersistenceService) {}

  getArticlesWorldNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?language=en&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesIndiaNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?language=en&country=in&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesBusinessNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=business&language=en&country='+
          this.dataPersistenceService.selectedCountry+'&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesTechnologyNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=technology&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesGeneralNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=general&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesHealthNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=health&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesScienceNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=science&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }  

  getArticlesEntertainmentNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=entertainment&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesSportsNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=sports&language=en&country='+
        this.dataPersistenceService.selectedCountry+'&apiKey=' +
        this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }

  /* getArticlesJavaScriptNews(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/everything?q=javascript%20india&language=en&sortBy=publishedAt&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  } */

  getArticlesSearchAnyNews(searchText: string): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/everything?q='+ searchText +'&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.articles));
  }
}
