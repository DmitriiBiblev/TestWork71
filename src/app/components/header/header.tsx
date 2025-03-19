import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import { Navigation } from '../navigation';
import s from './header.module.scss';

export const Header = () => (
  <header className={ cn(s.header, 'bg-dark p-3') }>
    <div className="container d-flex align-items-center justify-content-between">
      <Link className="navbar-brand text-white" href="/">
        TestWork71
      </Link>

      <Navigation />

      <a
        className="navbar-brand text-white"
        href="https://github.com/DmitriiBiblev/TestWork71"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </header>
);
