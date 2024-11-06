import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public olympics$: Observable<any> = of(undefined);
  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute
  ) {}
  selectedCountry: string | undefined = undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedCountry = params['country'];
    });
    if (this.selectedCountry) {
      this.olympics$ = this.olympicService.getOlympics().pipe(
        map((data) => {
          const selectedCountryData = data.find(
            (item) => item.country === this.selectedCountry
          );
          return [
            {
              name: this.selectedCountry,
              series:
                selectedCountryData?.participations.map((participation) => ({
                  name: participation.year.toString(),
                  value: participation.medalsCount,
                })) || [],
            },
          ];
        })
      );
    }
  }
}
