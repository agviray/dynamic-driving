import React from 'react';
import characters from '../../images/characters.png';
import BookButton from '../BookButton';

const HeroSection = () => {
  return (
    <div className="hero-content">
      <h1>
        <span>DYNAMIC DRIVING</span>
        <span>
          <span>DRIVING SCHOOL</span>
        </span>
      </h1>
      <div className="characters">
        <span>
          <img src={characters} alt="characters" />
        </span>
      </div>
      <BookButton
        toPage={'/contact'}
        specialStyle={false}
        name={`Request An Appointment`}
      />
    </div>
  );
};

export default HeroSection;
