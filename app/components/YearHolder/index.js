import React from 'react';
import PropTypes from 'prop-types'

import './index.css'

function YearHolder({ year }) {
  return (
    <div id="YearHolder__container">
      <div>
        <div>
          <div>
            <div>
              <span id="year_text">THE YEAR WAS</span>
              <span id="year_no">{year}</span>
              <span id="year_decoration">
                <hr />&nbsp; &#9733; &nbsp;<hr />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

YearHolder.propTypes = {
  year: PropTypes.number.isRequired
}

YearHolder.defaultProps = {
  year: 2016
}

export default YearHolder
