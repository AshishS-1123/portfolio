import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import { getPathData, viewportToPixels } from 'utils/geometry'

function Arc({ posX, posY, radius,  startAngle, endAngle, viewport }) {

  return (
    <motion.path
      d={getPathData (posX * viewport, posX * viewport, radius * viewport, startAngle, endAngle)}
      fill="transparent"
      strokeWidth="12"
      stroke="red"
      />
  );
}

Arc.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  viewport: PropTypes.number.isRequired
};

export default Arc;
