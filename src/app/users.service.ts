import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  totalCaseUrl = "https://api.covid19api.com/world/total";
  covidCaseUrl = "https://api.covid19api.com/country/";
  url = "https://api.covid19api.com/countries";
  public selectCountry = "";

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getTotalData() {
    return this.http.get(this.totalCaseUrl);
  }
  getCountryDataUrl() {
    return this.http.get(this.covidCaseUrl);
  }
  getCountryData(country: string) {
    this.covidCaseUrl = "https://api.covid19api.com/country/" + country;
  }
  private Details: any[] = [];

  addUser(details: FormGroup) {
    this.Details.push(details);
  }

  getUser() {
    return this.Details;
  }
}
