export interface DetailsData {
  NumberOfEntries: number;
  TotalNumberAthletes: number;
  TotalNumberOfMedals: number;
  selectedCountry: string;
  details: LineChartData[];
}

export interface LineChartData {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}
