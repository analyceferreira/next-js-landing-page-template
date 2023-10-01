import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => {
  return (
    <div className="text-center">
      {props.logo}

      <nav className="mx-4">
        <ul className="mt-5 flex flex-row justify-center text-xl font-medium text-primary-text child:mx-4">
          {props.children}
        </ul>
      </nav>

      <div className="mt-8 text-sm">
        <FooterCopyright />
      </div>
    </div>
  );
};

export { CenteredFooter };
