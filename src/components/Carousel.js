import React, { useState } from 'react';

const Carousel = ({ children, items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // - Changes active carousel item in view.
  const updateActiveItemIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveItemIndex(newIndex);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div
          style={{ transform: `translate(-${activeItemIndex * 100}%)` }}
          className="carousel-items"
        >
          {children}
        </div>
      </div>
      <div
        className={`control next ${
          activeItemIndex >= items.length - 1 ? 'disabled' : ''
        }`}
      >
        <div onClick={() => updateActiveItemIndex(activeItemIndex + 1)}>
          <span></span>
        </div>
      </div>
      <div
        className={`control previous ${activeItemIndex <= 0 ? 'disabled' : ''}`}
      >
        <div onClick={() => updateActiveItemIndex(activeItemIndex - 1)}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
