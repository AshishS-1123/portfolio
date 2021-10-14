import React from 'react'
import PropTypes from 'prop-types'

import YearHolder from 'components/YearHolder/Loadable'
import YearInfoHolder from 'components/YearInfoHolder/Loadable'
import NavArrows from 'components/NavArrows/Loadable'

function TimelineContainer() {
  const container_style = {
    background: "#161616",
    width: "60vw",
    height: "63vh",
    margin: "2vw auto",
    borderRadius: "8px",
    boxShadow: "0px 5px 19px 0px black"
  }

  return (
    <div style={container_style}>
      <YearHolder />
      <YearInfoHolder />
      <NavArrows />
    </div>
  )
}

export default TimelineContainer
