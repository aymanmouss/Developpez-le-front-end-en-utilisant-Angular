import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { DetailsData } from 'src/app/core/models/DetailsData';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public olympics$: Observable<DetailsData | null> = of(null);
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
      this.olympics$ = this.olympicService.getDataByCounty(
        this.selectedCountry
      );
    }
  }
}
