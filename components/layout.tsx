import React, { ReactNode } from 'react';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='mb-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
