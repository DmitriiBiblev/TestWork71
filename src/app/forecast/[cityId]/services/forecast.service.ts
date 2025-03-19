import { API_KEY, BASE_URL } from '#shared';
import axios, { AxiosPromise } from 'axios';
import { IForecast } from '../interfaces';

// Увы, но по дням апи платная, поэтому взял замену
// Эта выдает значение с разницей в 3 часа
// Смысл не меняется, но если иметь платный акк, то после forecast пишем /daily и все начинает работать как надо
// Но скорей всего тогда интерфейсы не подойдут
export const getForecast = (id: string): AxiosPromise<IForecast> => {
  return axios.get(`${ BASE_URL }/forecast`, {
    params: {
      id,
      cnt: 8,
      units: 'metric',
      appid: API_KEY
    }
  });
};
