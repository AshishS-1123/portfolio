import React from 'react'
import PropTypes from 'prop-types'

import TimelineContainer from 'containers/TimelineContainer/Loadable'

export function TimelineSection() {
  return (
    <div style={{fontSize: "25px", fontFamily: "Acme", textAlign: "center", paddingTop: "1.3vw"}}>
      Here Is A Snapshot Of My Journey Till Now
      <TimelineContainer />
    </div>
  );
}

TimelineSection.propTypes = {
};

export default TimelineSection
