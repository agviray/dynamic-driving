import React from 'react';
import characters from '../../images/characters.png';

const HeroContent = () => {
  return (
    <div className="hero">
      <h1>
        <span>DYNAMIC DRIVING</span>
        <span>DRIVING SCHOOL</span>
      </h1>
      <div className="characters">
        <span>
          <img src={characters} alt="characters" />
        </span>
      </div>
      <div className="book-button">
        <span>Let's Drive!</span>
      </div>
    </div>
  );
};

export default HeroContent;
