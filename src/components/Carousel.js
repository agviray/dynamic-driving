import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // - Changes active carousel item in view.
  const updateActiveItemIndex = () => {
    // - Change carousel item in view.
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div className="carousel-items">{children}</div>
      </div>
      <div className="control next">
        <div>
          <span>PREV</span>
        </div>
      </div>
      <div className="control previous">
        <div>
          <span>NEXT</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
