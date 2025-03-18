import React from 'react';
import { Spinner } from 'react-bootstrap';
import s from './search.module.scss';

export const SearchLoader = () => (
  <div className={ s.listContainer }>
    <Spinner animation="border" />
  </div>
);
