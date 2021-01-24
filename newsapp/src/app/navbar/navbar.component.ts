import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPersistenceService } from '../services/data-persistence.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private dataPersistenceService: DataPersistenceService) { }

  ngOnInit() {
    this.dataPersistenceService.selectedCountryValue = 'India';
   }

  onNewsClick(newsCategory: string) {
    this.dataPersistenceService.searchAnyNews = false;
    this.dataPersistenceService.selectedNewsCategory = newsCategory;
    if (this.dataPersistenceService.selectedNewsCategory == 'Search News') {
      this.dataPersistenceService.searchAnyNews = true;
    }
  }
}
