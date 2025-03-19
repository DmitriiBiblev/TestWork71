'use client';

import { useFavorites } from '#shared';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './favorite-list.module.scss';

export const FavoriteList = () => {
  const { cities, setFavoriteCities, removeCityToFavorite } = useFavorites();

  useEffect(() => {
    setFavoriteCities()
  }, [setFavoriteCities]);

  if (!cities.length) return (
    <div className="text-center p-5">
      You don&#39;t have any favorite cities yet!
    </div>
  );

  return (
    <div className={ s.list }>
      {
        cities.map(({ id, name }) => (
          <div className={ s.city } key={ id }>
            <Link className={ s.name } href={ `/forecast/${ id }` }>
              { name }
            </Link>

            <Button className={ s.btn } onClick={ () => removeCityToFavorite(id) }>
              Remove
            </Button>
          </div>
        ))
      }
    </div>
  );
};
