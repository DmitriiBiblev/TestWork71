import { IClouds, ICoordinates, IMain, IWeather, IWind } from '#shared';

export interface ICityBase {
  id: number;
  name: string;
  coord: ICoordinates;
  main: IMain;
  dt: number;
  wind: IWind;
  sys: Sys;
  clouds: IClouds;
  weather: IWeather[];
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
