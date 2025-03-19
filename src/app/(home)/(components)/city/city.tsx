'use client';

import { format, fromUnixTime } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useCityInfoStore } from '../../(stores)';
import s from './city.module.scss';

export const City = () => {
  const { isLoading, error, cityInfo, getCityInfo } = useCityInfoStore();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storage: string | null = localStorage.getItem('cityId');

    if (!storage) return;
    const cityId: number = JSON.parse(storage);

    getCityInfo(cityId);
  }, [getCityInfo]);

  if (isLoading) return (
    <div className="p-5">
      <Spinner animation="border" />
    </div>
  );

  if (error) return (
    <Alert data-bs-theme="dark" variant="danger">
      { error }
    </Alert>
  );

  if (!cityInfo) return (
    <div className="p-5">
      Select city
    </div>
  );

  const name: string = `${ cityInfo.name }, ${ cityInfo.sys.country }`;
  const date: string = format(fromUnixTime(cityInfo.dt), "dd.MM.yyyy HH:mm");
  const deg: string = `${ Math.round(cityInfo.main.temp) }°C`;

  return (
    <div className={ s.city }>
      <div className={ s.name }>{ name }</div>

      <div className={ s.date }>{ date }</div>

      <div className={ s.degrees }>{ deg }</div>

      <Button onClick={ () => setIsFavorite((value) => !value) }>
        { isFavorite ? 'Remove' : 'Add' } favorite
      </Button>
    </div>
  );
};
