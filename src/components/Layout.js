import React from 'react';
import '../sass/main.scss';
// - Components
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <h2>Footer Content</h2>
        <p>The footer content will go here.</p>
      </footer>
    </>
  );
};

export default Layout;
