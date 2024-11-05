import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<{ name: string; value: number }[]> = of([]);
  joTotal$: number = 0;

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics().pipe(
      map((data) => {
        return data.map((country) => ({
          name: country.country,
          value: country.participations.reduce(
            (total, participation) => total + participation.medalsCount,
            0
          ),
        }));
      })
    );
  }
  onSelect(country: { name: string }) {
    this.router.navigateByUrl(`/details?country=${country.name}`);
  }
}
