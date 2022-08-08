import React, { ReactNode } from 'react';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-3 bg-gradient-to-br from-primary to-secondary'></div>
      <Header />
      <main className='mb-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
