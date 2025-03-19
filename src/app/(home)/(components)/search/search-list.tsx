import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ICity } from '../../(interfaces)';
import s from './search.module.scss';

interface Props {
  cities: ICity[];
  onSelectCity: (city: ICity) => void;
}

export const SearchList = ({ cities, onSelectCity }: Props) => {
  return cities.map((city: ICity) => (
    <ListGroup.Item
      data-bs-theme="dark"
      key={ city.id }
      className={ s.lisItem }
      onClick={ () => onSelectCity(city) }
    >
      <span>
        { city.name }, { city.sys.country }
      </span>

      <span>
        { Math.round(city.main.temp) }°C
      </span>
    </ListGroup.Item>
  ));
};
