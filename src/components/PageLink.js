import React from 'react';
import { Link } from 'gatsby';

const PageLink = ({ toPage, name }) => {
  return (
    <div className="page-link">
      <Link to={toPage}>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default PageLink;
