import React from 'react'
import PropTypes from 'prop-types'

import TimelineComponent from 'components/TimelineComponent/Loadable'
import YearHolder from 'components/YearHolder/Loadable'
import YearInfoHolder from 'components/YearInfoHolder/Loadable'
import NavArrows from 'components/NavArrows/Loadable'

export function TimelineSection() {
  return (
    <div style={{fontSize: "25px", fontFamily: "Acme", textAlign: "center", paddingTop: "1.3vw"}}>
      Here Is A Snapshot Of My Journey Till Now
      <TimelineComponent>
        <YearHolder />
        <YearInfoHolder />
        <NavArrows />
      </TimelineComponent>
    </div>
  );
}

TimelineSection.propTypes = {
};

export default TimelineSection
