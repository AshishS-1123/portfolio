import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function YearInfoHolder({ yearMeta, yearInfo }) {
  return (
    <div id="YearInfoHolder__container">
      <h4>{yearMeta}</h4>
      <p>
        {
          yearInfo.map(sentence => {
            return (
              <p>{sentence}</p>
            )
          })
        }
      </p>
    </div>
  )
}

YearInfoHolder.propTypes = {
  yearMeta: PropTypes.string.isRequired,
  yearInfo: PropTypes.string.isRequired
}

YearInfoHolder.defaultProps = {
  yearMeta: "10th standard",
  yearInfo: "Whoops! Looks like the data din't load correctly"
}

export default YearInfoHolder;
