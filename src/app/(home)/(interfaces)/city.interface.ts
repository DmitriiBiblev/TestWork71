import { ICityBase } from './city-base.interface';

export interface ICity extends ICityBase {
  rain: never | null; // I don't know type
  snow: never | null; // I don't know type
}
