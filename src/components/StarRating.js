import React, { useState, useEffect } from 'react';

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
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 292 292"
        >
          <path
            fill="#fff"
            d="M291.667 0H0v291.667h291.667V0zM145.833 13.926l32.742 100.768h105.954l-85.719 62.278 32.742 100.769-85.719-62.278-85.718 62.278 32.741-100.769-85.718-62.278h105.954l32.741-100.768z"
          ></path>
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
