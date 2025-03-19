'use client';

import { useFavorites } from '#shared';
import { format, fromUnixTime } from 'date-fns';
import React, { useEffect } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useCityInfoStore } from '../../(stores)';
import s from './city.module.scss';

export const City = () => {
  const { isLoading, error, cityInfo, getCityInfo } = useCityInfoStore();
  const { checkIsFavorite, addCityToFavorite, removeCityToFavorite } = useFavorites();

  useEffect(() => {
    const storage: string | null = localStorage.getItem('cityId');

    if (!storage || cityInfo) return;
    const cityId: number = JSON.parse(storage);

    getCityInfo(cityId);
  }, [cityInfo, getCityInfo]);

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
  const isFavorite: boolean = checkIsFavorite(cityInfo.id);

  const handleSwitchFavorite = () => {
    if (isFavorite) {
      removeCityToFavorite(cityInfo.id);
    } else {
      addCityToFavorite({ id: cityInfo.id, name });
    }
  };

  return (
    <div className={ s.city }>
      <div className={ s.name }>{ name }</div>

      <div className={ s.date }>{ date }</div>

      <div className={ s.degrees }>{ deg }</div>

      <Button onClick={ handleSwitchFavorite }>
        { isFavorite ? 'Remove' : 'Add' } favorite
      </Button>
    </div>
  );
};
