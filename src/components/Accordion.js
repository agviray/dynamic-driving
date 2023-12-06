import React, { useState } from 'react';

const Accordion = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="heading" onClick={() => setIsOpen(!isOpen)}>
        <p>{heading}</p>
        <div>
          <span className={isOpen ? 'isOpen' : ''}></span>
        </div>
      </div>
      <div className={`content ${isOpen ? 'isOpen' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
