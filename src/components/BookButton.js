import React from 'react';
import { Link } from 'gatsby';

const BookButton = ({ toPage, name }) => {
  return (
    <div className="book-button">
      <Link to={toPage}>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default BookButton;
