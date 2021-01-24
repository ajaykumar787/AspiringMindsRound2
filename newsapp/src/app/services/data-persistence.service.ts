import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class DataPersistenceService {

    selectedNewsCategory: string;
    searchAnyNews: boolean = false;
    selectedCountry: string = 'in';
    selectedCountryValue: string;
  }