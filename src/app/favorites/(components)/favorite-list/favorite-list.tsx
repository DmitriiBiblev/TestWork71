import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
import s from './favorite-list.module.scss';

const FAVORITES = [
  { id: 1, name: "New York", country: 'RS', degrees: 1 },
  { id: 2, name: "Los Angeles", country: 'SD', degrees: 12 },
  { id: 3, name: "Toronto", country: 'FD', degrees: 15 },
  { id: 4, name: "Chicago", country: 'DF', degrees: 3 },
  { id: 5, name: "Houston", country: 'ED', degrees: 6 },
  { id: 6, name: "San Francisco", country: 'DE', degrees: 8 },
  { id: 7, name: "Toronto", country: 'DF', degrees: -12 }
];

export const FavoriteList = () => {
  return (
    <div className={ s.list }>
      {
        FAVORITES.map(({ id, name, country, degrees }) => (
          <div className={ s.city } key={ id }>
            <Link className={ s.name } href="/forecast">
              { name }, { country }
            </Link>

            <div className={ s.degrees }>
              { degrees }&deg;C
            </div>

            <Button className={ s.btn }>
              Remove
            </Button>
          </div>
        ))
      }
    </div>
  );
};
