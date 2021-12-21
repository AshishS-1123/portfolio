import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types'

import stackedCards from './stacked_cards/stackedCards';

import './index.css';

function ProjectCards() {
  useEffect(() => {
    const stackedCardFanOut = new stackedCards({
    selector: '.stacked-cards-slide',
    layout: "slide",
    transformOrigin: "center",
    });

    		stackedCardFanOut.init();
  }, [])

  return (
    <div className="container-fixed stacked-cards stacked-cards-slide">
      <ul>
        <li className="ProjectCards__card"></li>
        <li className="ProjectCards__card"></li>
        <li className="ProjectCards__card"></li>
        <li className="ProjectCards__card"></li>
        <li className="ProjectCards__card"></li>
      </ul>
      <p>My Projects and Open Source Contributions</p>
    </div>
  )
}

export default memo(ProjectCards);

/*
Projects

1. Akira
2. Chat App
3. MERN stack authentiction
4. Clone
*/
