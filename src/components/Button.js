import React from 'react';
import { navigate } from 'gatsby';

const Button = ({ src, name }) => {
  const navigateToPage = (page) => {
    navigate(page);
  };
  return (
    <div className="button">
      <span onClick={() => navigateToPage(src)}>{name}</span>
    </div>
  );
};

export default Button;
