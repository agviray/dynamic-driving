import React from 'react';
import '../sass/main.scss';
// - Components
import Navbar from './Navbar';
import FooterContent from './FooterContent';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
};

export default Layout;
