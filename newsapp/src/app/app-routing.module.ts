import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { ArticlesNewsComponent } from './articles-news/articles-news.component';

const routes: Routes = [
  { path: 'articles-world-news', component: ArticlesNewsComponent },
  { path: 'articles-india-news', component: ArticlesNewsComponent },
  { path: 'articles-business', component: ArticlesNewsComponent },
  { path: 'articles-technology', component: ArticlesNewsComponent },
  { path: 'articles-general', component: ArticlesNewsComponent },
  { path: 'articles-health', component: ArticlesNewsComponent },
  { path: 'articles-science', component: ArticlesNewsComponent },
  { path: 'articles-entertainment', component: ArticlesNewsComponent },
  { path: 'articles-sports', component: ArticlesNewsComponent },
  { path: 'articles-search-news', component: ArticlesNewsComponent },
  { path: 'app-settings', component: AppSettingsComponent },
  { path: '', redirectTo: 'articles-world-news', pathMatch: 'full'  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
