import React, { useState, useEffect } from 'react';
import Stars from '../images/icons/star-cutout.svg';

// - Returns Star Rating svg image.
// - Can render partial star ratings.
const StarRating = ({ rating }) => {
  const [fullStarClasses, setFullStarClasses] = useState([]);
  const [partialStarStyle, setPartialStarStyle] = useState({});

  // - The contents of this useEffect determines the appearance of a single star in
  //   the 5 star rating range.
  // - For example, fullStar = a whole, full-colored star,
  //   and partialStar = a partial-colored star.
  useEffect(() => {
    // - Set variables as such to determine how many full-colored stars to render,
    //   and how many partial-colored stars to render, if any.
    // - Value of rating can be a whole number (ie 5) or float (ie 4.75).
    const fullStars = rating.toString().split('.')[0]; // - Get whole numnber (if any)
    const partialStar = (rating - parseInt(fullStars)).toFixed(2); // - Get decimal number (if any)

    // - Create array of className 'full'. This is the className for the full-colored stars.
    // - This array will contain exactly 5 'full' classNames, which indicate that the StarRating
    //   image will be all colored, representing a 5 star rating.
    if (parseInt(fullStars) === 5) {
      let allFullClasses = [];
      for (let i = 0; i < parseInt(fullStars); i++) {
        allFullClasses.push('full');
      }
      // - Set classes for full-colored stars.
      setFullStarClasses([...allFullClasses]);
      return;
    }

    // - Create array of classNames 'full', but it will be less than 5 values.
    // - This indicates that the StarRating image will be less than 5 stars.
    if (parseInt(fullStars) < 5) {
      let someFullClasses = [];
      for (let i = 0; i < parseInt(fullStars); i++) {
        someFullClasses.push('full');
      }

      // - Set classes for full-colored stars, and set styles for partial-colored
      //   starts (if any).
      if (partialStar === undefined) {
        setFullStarClasses([...someFullClasses]);
      } else {
        setFullStarClasses([...someFullClasses]);
        setPartialStarStyle({ width: `${partialStar * 100}%` });
      }
    }
  }, [rating]);

  // - Returns a single star with provided style arguments to determine
  //   the star's appearance, ie full-colored, partial-colored, or blank.
  const returnStar = (full, partial) => {
    return (
      <span className="star-container">
        <span
          className={`inner ${full ? full : ''}`}
          style={partial !== null ? { ...partial } : {}}
        ></span>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 76"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          xmlnsserif="http://www.serif.com/"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: '2',
          }}
        >
          <path
            d="M15.136,75.376l-15.136,-0l0,-75.376l79.255,0l-0,75.376l-15.137,-0l-9.354,-28.791l24.491,-17.794l-30.273,-0l-9.355,-28.791l-9.354,28.791l-30.273,-0l24.491,17.794l-9.355,28.791Zm48.982,-0l-48.982,-0l24.491,-17.794l24.491,17.794Z"
            style={{ fill: '#fff' }}
          />
        </svg>
      </span>
    );
  };

  // - Renders all 5 stars (ie full-colored, partial-colored, or blank.)
  const renderStars = (fullClasses, partialStyle) => {
    let stars = [];
    // renderEmptyStar serves as flag to determine if any blank stars should be rendered.
    let renderEmptyStar = false;
    // - Render full-colored stars until none available.
    for (let i = 0; i < 5; i++) {
      if (fullClasses[i]) {
        stars.push(<>{returnStar(fullClasses[i], null)}</>);
        continue;
      } else if (renderEmptyStar === false) {
        // - Check if partial-colored star should be rendered.
        if (Object.keys(partialStyle).length !== 0) {
          stars.push(<>{returnStar(null, partialStyle)}</>);
        }
        // - Regardless of whether a partial-colored star is rendered, the
        //   renderEmtpyStar flag should be switched to true.
        // - This is done in case there are remaning stars left to render
        //   that are neither colored or partial-colored stars.
        renderEmptyStar = true;
        continue;
      } else if (renderEmptyStar === true) {
        stars.push(<>{returnStar(null, null)}</>);
      }
    }

    return stars.map((star, index) => <span key={index}>{star}</span>);
  };

  return (
    <div className="star-rating">
      <div>{renderStars(fullStarClasses, partialStarStyle)}</div>
    </div>
  );
};

export default StarRating;
