'use client';

import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, FormGroup, InputGroup, ListGroup } from 'react-bootstrap';
import { ICity } from '../../(interfaces)';
import { useCitiesStore, useCityInfoStore } from '../../(stores)';
import { SearchEmpty } from './search-empty';
import { SearchList } from './search-list';
import { SearchLoader } from './search-loader';
import s from './search.module.scss';

export const Search = () => {
  const { isLoading, searchText, error, cities, setSearchText, getCities, destroy, reset } = useCitiesStore();
  const { getCityInfo } = useCityInfoStore();
  const [isOpened, setIsOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      destroy();
    };
  }, [destroy]);

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsOpened(false);
  };

  const handleGetCities = () => {
    setIsOpened(true);

    if (cities.length) return;
    getCities();
  };

  const handleSelectCity = ({ id }: ICity) => {
    setIsOpened(false);
    reset();

    getCityInfo(id);
  };

  const renderCityList = () => {
    if (!isOpened) return null;
    if (isLoading) return <SearchLoader />;
    if (cities.length) return <SearchList cities={ cities } onSelectCity={ handleSelectCity } />;
    return <SearchEmpty searchText={ searchText } />;
  };

  return (
    <div className="w-50 d-flex flex-column gap-3">
      <FormGroup className="position-relative">
        <InputGroup>
          <Form.Control
            data-bs-theme="dark"
            placeholder="Search city"
            value={ searchText }
            className={ cn({ [s.error]: error }) }
            onChange={ handleSearchTextChange }
          />

          <Button
            data-bs-theme="dark"
            variant="outline-secondary"
            disabled={ searchText.length < 2 }
            onClick={ handleGetCities }
          >
            Search
          </Button>
        </InputGroup>

        <ListGroup data-bs-theme="dark" ref={ listRef } className={ s.list }>
          { renderCityList() }
        </ListGroup>
      </FormGroup>

      { error && <p className={ s.errorText }>{ error }</p> }
    </div>
  );
};
