import { IClouds, IMain, IWeather, IWind } from '#shared';

export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  list: Day[];
  city: City;
}

interface Day {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: IDBCursor;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: 1647358295;
}
