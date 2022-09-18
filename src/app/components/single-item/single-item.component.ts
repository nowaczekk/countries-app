
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of, switchMap} from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

export type CountryExtendedModel = {
  name: {
    common: string
  },
  alpha3Code: string, 
  region: string, 
  subregion: string,
  flag: string,
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
  countryCode = '';
  countryData$!: Observable<any>;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.countryData$ = this.activatedRoute.params.pipe(switchMap((params: Params)=> {
      if(!params) return of(null);

      this.countryCode = params['id'];

      return this.getCountryDataByCode(this.countryCode);
    }))


  }

  getCountryDataByCode(code: string): Observable<any> {
    const url = 'https://restcountries.com/v3.1/alpha/'+ code;

    return this.httpService.get(url);
  }

}
