import React from 'react';
import { Link } from 'gatsby';

const BookButton = ({ toPage, name, specialStyle }) => {
  const renderedButton = (
    <div className={`book-button ${specialStyle === true ? 'special' : ''}`}>
      <Link to={toPage}>
        <span>{name}</span>
      </Link>
    </div>
  );

  return <>{renderedButton}</>;
};

export default BookButton;
