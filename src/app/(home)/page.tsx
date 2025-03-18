import React from 'react';
import { City, Search } from "./(components)";

export default function Home() {

  return (
    <div className="container p-5 d-flex flex-column align-items-center gap-3">
      <Search />

      <City />
    </div>
  );
}
