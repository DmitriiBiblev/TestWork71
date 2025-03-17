"use client";

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
            className={ `nav-item nav-link ${ pathname === rout ? 'active' : '' }` }
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
