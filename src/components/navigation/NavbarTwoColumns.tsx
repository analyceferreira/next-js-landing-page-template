/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="flex items-center text-xl font-medium text-primary-text child-not-first:mt-0 child-not-last:mr-5 ">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
