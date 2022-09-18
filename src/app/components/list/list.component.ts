
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

export type CountryModel = {
  name: string,
  alpha3Code: string, 
  region: string, 
  capital: string,
  flag: string,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  allCountries$!: Observable<CountryModel[]>;

  constructor(private httpService: HttpService){
  }

  ngOnInit(): void {
    this.allCountries$ = this.getListData();
  }

  getListData(): Observable<CountryModel[]> {
    const url = 'https://restcountries.com/v2/all';

    return  this.httpService.get(url)
  }
}
