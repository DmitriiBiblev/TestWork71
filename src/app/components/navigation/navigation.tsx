"use client";

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from './nav-items.data';

export const Navigation = () => {
  const pathname: string = usePathname();

  return (
    <nav className="navbar navbar-dark navbar-nav d-flex flex-row gap-4">
      {
        NAV_ITEMS.map(({ rout, text }) => (
          <Link
            className={ cn('nav-item nav-link', { 'active': pathname === rout }) }
            href={ rout }
            key={ rout }
          >
            { text }
          </Link>
        ))
      }
    </nav>
  );
};
