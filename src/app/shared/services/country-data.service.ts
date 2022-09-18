import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CountryModel } from "src/app/components/list/list.component";
import { CountryExtendedModel } from "src/app/components/single-item/single-item.component";
import { HttpService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class CountryDataService {
    constructor(private httpService: HttpService) {}

    getListData(): Observable<CountryModel[]> {
        const url = 'https://restcountries.com/v2/all';

        return  this.httpService.get(url);
    }

    getCountryDataByCode(code: string): Observable<CountryExtendedModel[]> {
        const url = 'https://restcountries.com/v3.1/alpha/'+ code;

        return this.httpService.get(url);
    }
}