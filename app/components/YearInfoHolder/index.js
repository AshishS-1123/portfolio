import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function YearInfoHolder({ yearMeta, yearInfo }) {
  return (
    <div id="YearInfoHolder__container">
      <h4>{yearMeta}</h4>
      <div>
        {
          yearInfo.map((sentence, idx) => {
            return (
              <p key={idx}>{sentence}</p>
            )
          })
        }
      </div>
    </div>
  )
}

YearInfoHolder.propTypes = {
  yearMeta: PropTypes.string.isRequired,
  yearInfo: PropTypes.array.isRequired
}

YearInfoHolder.defaultProps = {
  yearMeta: "10th standard",
  yearInfo: "Whoops! Looks like the data din't load correctly"
}

export default YearInfoHolder;
