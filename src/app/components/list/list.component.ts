
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryDataService } from 'src/app/shared/services/country-data.service';

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

  constructor(private countryDataService: CountryDataService){}

  ngOnInit(): void {
    this.allCountries$ = this.countryDataService.getListData();
  }
}
