import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import { getPathData, viewportToPixels } from 'utils/geometry'
import "./index.css"

function Arc({ posX, posY, radius,  startAngle, endAngle, viewport, color, strokeWidth }) {

  return (
    <React.Fragment>
      <filter id="dropshadow" x="-2" y="-2" width="12vw" height="12vw">
        <feGaussianBlur stdDeviation="12" />
      </filter>
      <motion.path
        d={getPathData (posX * viewport, posX * viewport, radius * viewport * 1.3, startAngle, endAngle)}
        fill="transparent"
        strokeWidth={strokeWidth}
        stroke={color}
        opacity="0.81"
        strokeLinecap="round"
        className="filter"
      />
      <motion.path
        d={getPathData (posX * viewport, posX * viewport, radius * viewport * 1.3, startAngle, endAngle)}
        fill="transparent"
        strokeWidth={strokeWidth}
        stroke={color}
        strokeLinecap="round"
      />
    </React.Fragment>
  );
}

Arc.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  viewport: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string.isRequired
};

export default Arc;
