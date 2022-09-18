
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of, switchMap} from 'rxjs';
import { CountryDataService } from 'src/app/shared/services/country-data.service';

export type CountryExtendedModel = {
  name: {
    common: string
  },
  alpha3Code: string, 
  region: string, 
  subregion: string,
  flags: {
    png: string
  },
  capital: string[],
  altSpellings: string [],
}

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleItemComponent implements OnInit {
  countryData$!: Observable<CountryExtendedModel[]>;

  constructor(private countryDataService: CountryDataService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.countryData$ = this.activatedRoute.params.pipe(switchMap((params: Params)=> {
      if(!params) return of([]);

      const countryCode = params['id'];

      return this.countryDataService.getCountryDataByCode(countryCode);
    }))

  }
}
