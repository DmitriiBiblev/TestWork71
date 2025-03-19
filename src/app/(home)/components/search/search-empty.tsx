import React from 'react';
import s from './search.module.scss';

interface Props {
  searchText: string;
}

export const SearchEmpty = ({ searchText }: Props) => (
  <div className={ s.listContainer }>
    No results for { searchText }
  </div>
);
