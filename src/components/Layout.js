import React from 'react';
import '../sass/main.scss';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2>Header Content</h2>
        <p>The header content will go here</p>
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
