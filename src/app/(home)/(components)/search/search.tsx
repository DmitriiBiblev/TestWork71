'use client';

import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, FormGroup, InputGroup, ListGroup } from 'react-bootstrap';
import { ICity } from '../../(interfaces)';
import { getCities } from '../../(services)';
import { SearchEmpty } from './search-empty';
import { SearchList } from './search-list';
import { SearchLoader } from './search-loader';
import s from './search.module.scss';

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cities, setCities] = useState<ICity[]>([]);
  const [isOpened, setIsOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const error: string = value.length < 2 ? "Enter at least 2 characters" : "";

    setSearchText(value);
    setError(error);
    setIsOpened(false);
  };

  const handleGetCities = () => {
    setIsLoading(true);
    setIsOpened(true);

    getCities(searchText)
      .then((cities: ICity[]) => setCities(cities))
      .catch(() => {
        setError('An unexpected error occurred');
        setIsOpened(false);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSelectCity = (city: ICity) => {
    setSearchText("");
    setCities([]);
    setIsOpened(false);

    console.log(city);
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
