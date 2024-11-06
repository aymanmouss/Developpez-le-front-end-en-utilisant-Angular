import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);
  // Create an observable to store error messages
  private error$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => {
        this.olympics$.next(value);
        this.error$.next(null);
      }),
      catchError((error, caught) => {
        //  Add error message to display for user
        this.error$.next('Failed to load data. Please try again later.');
        // console log error
        console.error(error);
        // Return an empty data set if an error occurs
        this.olympics$.next([]);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }
  getDataByCounty(country: string) {
    return this.olympics$.asObservable().pipe(
      map((data) => {
        const countryData = data.find((item) => item.country === country);
        if (!countryData) {
          return null;
        }

        return {
          NumberOfEntries: countryData.participations.length,
          TotalNumberOfMedals: countryData.participations.reduce(
            (total, participation) => total + participation.medalsCount,
            0
          ),
          TotalNumberAthletes: countryData.participations.reduce(
            (total, participation) => total + participation.athleteCount,
            0
          ),
          selectedCountry: country,
          details: [
            {
              name: country,
              series: countryData.participations.map((participation) => ({
                name: participation.year.toString(),
                value: participation.medalsCount,
              })),
            },
          ],
        };
      })
    );
  }
  getError() {
    return this.error$.asObservable();
  }
}
