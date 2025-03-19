import { AxiosResponse } from 'axios';
import { format, fromUnixTime } from 'date-fns';
import { IForecast } from './interfaces';
import s from './page.module.scss';
import { getForecast } from './services';

interface Props {
  params: Promise<{ cityId: string }>;
}

export default async function Forecast({ params }: Props) {
  const { cityId } = await params;
  let res: AxiosResponse<IForecast> | null = null;

  try {
    res = await getForecast(cityId);
  } catch (error) {
    console.error(error);
  }

  if (!res) return (
    <div className="text-center p-5">
      City not found
    </div>
  );

  const { data: { list, city } } = res;

  return (
    <div className="container py-4 d-flex flex-column gap-3">
      <h1>{ city.name }, { city.country }</h1>

      <div className={ s.list }>
        {
          list.map((day) => (
            <div key={ day.dt } className={ s.day }>
              <div>
                { format(fromUnixTime(day.dt), "EEE, MMM d") }
              </div>

              <div>
                { Math.round(day.main.temp) }°C
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
