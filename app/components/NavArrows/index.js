import React from 'react';
import PropTypes from 'prop-types'

import "./index.css"

function NavArrows({ setActiveYear, activeYear }) {
  const handleClick = (event) => {
    const sel_arrow = event.target.getAttribute('dataarrowname')

    if (sel_arrow === "RIGHT" && activeYear < 5) {
      setActiveYear(activeYear + 1)
    } else if (sel_arrow === "LEFT" && activeYear > 0) {
      setActiveYear(activeYear - 1);
    }
  }

  return (
    <div id="NavArrow__container">
      <span id="NavArrow_left" dataarrowname="LEFT" onClick={handleClick}>
        <img src="/larrow.svg" dataarrowname="LEFT"/>
      </span>
      <span id="NavArrow_right" dataarrowname="RIGHT" onClick={handleClick}>
        <img src="/rarrow.svg" dataarrowname="RIGHT" />
      </span>
    </div>
  )
}

NavArrows.propTypes = {
  setActiveYear: PropTypes.func.isRequired,
  activeYear: PropTypes.number.isRequired
};

NavArrows.defaultProps = {
  setActiveYear: () => console.warn("setActiveYear function not provided as props"),
  activeYear: 0
}

export default NavArrows;
