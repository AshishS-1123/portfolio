import React from 'react';
import PropTypes from 'prop-types'

import "./index.css"

function NavArrows() {

  return (
    <React.Fragment>
      <span id="NavArrow_left">
        <img src="/larrow.svg" />
      </span>
      <span id="NavArrow_right">
        <img src="/rarrow.svg" />
      </span>
    </React.Fragment>
  )
}

NavArrows.propTypes = {};

export default NavArrows;
