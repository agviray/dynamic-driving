import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({ currentPage }) => {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    // - Capitalize the current page's name and set it in breadcrumb component.
    const currentPageName = currentPage.pathname.substring(
      1,
      currentPage.pathname.length - 1
    );
    const capitalizedPageName = currentPageName.replace(
      currentPageName.charAt(0),
      currentPageName.charAt(0).toUpperCase()
    );

    if (pageName === '') {
      setPageName(capitalizedPageName);
    }
  }, []);

  const renderedContent = (
    <>
      <Link to="/">
        <span>Home</span>
      </Link>
      /<span className="current-page bolded">{pageName}</span>
    </>
  );

  return <div className="breadcrumbs">{renderedContent}</div>;
};

export default Breadcrumbs;
