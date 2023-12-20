import React from 'react';

const PageExternalLink = ({ toPage, name }) => {
  return (
    <div className="page-link">
      <a href={toPage} target="_blank">
        <span>{name}</span>
      </a>
    </div>
  );
};

export default PageExternalLink;
