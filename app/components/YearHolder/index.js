import React from 'react';
import PropTypes from 'prop-types'

import './index.css'

function YearHolder() {
  return (
    <div id="YearHolder__container">
      <div>
        <div>
          <div>
            <div>
              <span id="year_text">THE YEAR WAS</span>
              <span id="year_no">2016</span>
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

YearHolder.propTypes = {};

export default YearHolder;
