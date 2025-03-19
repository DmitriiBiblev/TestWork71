import { ICityBase } from './city-base.interface';

export interface ICityInfo extends ICityBase {
  base: string;
  visibility: number;
  timezone: number;
  cod: number;
}

