import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from '../services/data-persistence.service';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {

  //selectedCountry: String;

  countryList: Country[] = [
    {value: 'ae', viewValue: 'United Arab Emirates'},
    {value: 'ar', viewValue: 'Argentina'},
    {value: 'at', viewValue: 'Austria'},
    {value: 'au', viewValue: 'Australia'},
    {value: 'be', viewValue: 'Belgium'},
    {value: 'bg', viewValue: 'Bulgaria'},
    {value: 'br', viewValue: 'Brazil'},
    {value: 'ca', viewValue: 'Canada'},
    {value: 'ch', viewValue: 'Switzerland'},
    {value: 'cn', viewValue: 'China'},
    {value: 'co', viewValue: 'Colombia'},
    {value: 'cu', viewValue: 'Cuba'},
    {value: 'cz', viewValue: 'Czech Republic'},
    {value: 'de', viewValue: 'Germany'},
    {value: 'eg', viewValue: 'Egypt'},
    {value: 'fr', viewValue: 'France'},
    {value: 'gb', viewValue: 'United Kingdom'},
    {value: 'gr', viewValue: 'Greece'},
    {value: 'hk', viewValue: 'Hong Kong'},
    {value: 'hu', viewValue: 'Hungary'},
    {value: 'id', viewValue: 'Indonesia'},
    {value: 'ie', viewValue: 'Ireland'},
    {value: 'il', viewValue: 'Israel'},
    {value: 'in', viewValue: 'India'},
    {value: 'it', viewValue: 'Italy'},
    {value: 'jp', viewValue: 'Japan'},
    {value: 'kr', viewValue: 'Korea'},
    {value: 'lt', viewValue: 'Lithuania'},
    {value: 'lv', viewValue: 'Latvia'},
    {value: 'ma', viewValue: 'Morocco'},
    {value: 'mx', viewValue: 'Mexico'},
    {value: 'my', viewValue: 'Malaysia'},
    {value: 'ng', viewValue: 'Nigeria'},
    {value: 'nl', viewValue: 'Netherlands'},
    {value: 'no', viewValue: 'Norway'},
    {value: 'nz', viewValue: 'New Zealand'},
    {value: 'ph', viewValue: 'Philippines'},
    {value: 'pl', viewValue: 'Poland'},
    {value: 'pt', viewValue: 'Portugal'},
    {value: 'ro', viewValue: 'Romania'},
    {value: 'rs', viewValue: 'Serbia'},
    {value: 'ru', viewValue: 'Russia'},
    {value: 'sa', viewValue: 'Saudi Arabia'},
    {value: 'se', viewValue: 'Sweden'},
    {value: 'sg', viewValue: 'Singapore'},
    {value: 'si', viewValue: 'Slovenia'},
    {value: 'sk', viewValue: 'Slovakia'},
    {value: 'th', viewValue: 'Thailand'},
    {value: 'tr', viewValue: 'Turkey'},
    {value: 'tw', viewValue: 'Taiwan'},
    {value: 'ua', viewValue: 'Ukraine'},
    {value: 'us', viewValue: 'United States of America'},
    {value: 've', viewValue: 'Venezuela'},
    {value: 'za', viewValue: 'South Africa'}
  ];

  constructor(private dataPersistenceService: DataPersistenceService) { }

  ngOnInit() {
    this.dataPersistenceService.selectedNewsCategory = 'Settings';
    //this.dataPersistenceService.selectedCountryValue = 'India';
    //console.log(this.countryList['dataPersistenceService.selectedCountry']);
  }

  onCountryChange() {
    for (let obj of this.countryList) {
      if (obj.value == this.dataPersistenceService.selectedCountry) {
        for (let key in obj) {
          this.dataPersistenceService.selectedCountryValue = obj[key];
        }
      }    
    }
  }
}
