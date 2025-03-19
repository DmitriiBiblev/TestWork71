import { ICity } from './city.interface';

export interface IGetCitiesResponse {
  message: string;
  cod: string;
  count: number;
  list: ICity[];
}
