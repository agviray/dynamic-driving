import React from 'react';
import characters from '../../images/characters.png';
import BookButton from '../BookButton';

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
      <BookButton text={`Request An Appointment`} />
    </div>
  );
};

export default HeroContent;
