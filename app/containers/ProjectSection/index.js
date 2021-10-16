import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ProjectCards from 'components/ProjectCards/Loadable'

export function ProjectSection() {
  return (
    <div>
      <ProjectCards />
    </div>
  )
}

ProjectSection.propTypes = {
};

export default memo (ProjectSection)
