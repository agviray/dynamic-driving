import React, { useState } from 'react';

const Accordion = ({ header, content, showArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="header-container" onClick={() => setIsOpen(!isOpen)}>
        {header.icon ? (
          <span className="icon-container">
            {<img src={header.icon.src} alt={header.icon.alt} />}
          </span>
        ) : null}
        {<h3>{header.heading}</h3>}
        {showArrow ? (
          <div className="arrow-container">
            <span className={isOpen ? 'isOpen' : ''}></span>
          </div>
        ) : null}
      </div>
      <div className={`content-container ${isOpen ? 'isOpen' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
