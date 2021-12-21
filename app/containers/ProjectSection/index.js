import React, { memo } from 'react';
// import PropTypes from 'prop-types'

import ProjectCards from 'components/ProjectCards/Loadable';

export function ProjectSection() {
  return (
    <div
      style={{
        fontSize: '25px',
        fontFamily: 'Acme',
        textAlign: 'center',
        paddingTop: '1.3vw',
      }}
    >
      {/* Take A Look At Some Of My Projects And Open Source Contributions */}
      <ProjectCards />
    </div>
  );
}

ProjectSection.propTypes = {};

export default memo(ProjectSection);
