'use client';

import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import s from './city.module.scss';

export const City = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  if (isLoading) return (
    <div className="p-5">
      <Spinner animation="border" />
    </div>
  );

  if (isError) return (
    <Alert data-bs-theme="dark" variant="danger">
      An unexpected error occurred
    </Alert>
  );

  return (
    <div className={ s.city }>
      <div className={ s.name }>
        Subotica, RS
      </div>

      <div className={ s.date }>
        18.03.2025 12:36
      </div>

      <div className={ s.degrees }>
        15&deg;C
      </div>

      <Button onClick={ () => setIsFavorite((value) => !value) }>
        { isFavorite ? 'Remove' : 'Add' } favorite
      </Button>
    </div>
  );
};
