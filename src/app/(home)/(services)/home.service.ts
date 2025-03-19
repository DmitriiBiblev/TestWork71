import { API_KEY, BASE_URL } from '#shared';
import { Axios, AxiosObservable } from 'axios-observable';
import { ICityInfo, IGetCitiesResponse } from '../(interfaces)';

// Эта апищка не описана на сайте, но намного удобнее, чем геокидинг
// Есть крутая апишка one call, но увы она платная
export const getCities = (name: string): AxiosObservable<IGetCitiesResponse> => {
  return Axios.get(`${ BASE_URL }/find`, {
    params: {
      q: name,
      units: 'metric',
      appid: API_KEY,
    }
  });
};

export const getCityInfo = (id: number): AxiosObservable<ICityInfo> => {
  return Axios.get(`${ BASE_URL }/weather`, {
    params: {
      id,
      units: 'metric',
      appid: API_KEY,
    }
  });
};
