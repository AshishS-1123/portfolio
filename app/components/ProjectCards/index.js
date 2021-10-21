import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'

import stackedCards from './stacked_cards/stackedCards'

import './index.css'

function ProjectCards() {
  useEffect(() => {
        		var stackedCardFanOut = new stackedCards({
    		 	selector: '.stacked-cards-slide',
    		 	layout: "slide",
    		 	transformOrigin: "center",
    		 });

    		stackedCardFanOut.init();
  }, [])

  return (
    <div id="ProjectCards__container">
        <div className="stacked-cards stacked-cards-slide">
          <ul>
            <li className="ProjectCards__card"></li>
            <li className="ProjectCards__card"></li>
            <li className="ProjectCards__card"></li>
            <li className="ProjectCards__card"></li>
            <li className="ProjectCards__card"></li>
          </ul>
        </div>
    </div>
  )
}

export default ProjectCards
