import React from 'react'
import { motion } from 'framer-motion'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import arcs from './animatedArcData'
import "./index.css"

function HeaderAnimation() {
  const [width, height] = useWindowSize ()

  const animation = {
    rotate: [1440, -1440]
  }

  const transition = {
    duration: 5,
    yoyo: Infinity,
    ease: "circIn"
  }

  const style = {
    originX: "50%",
    originY: "50%",
    animationTimingFunction: "linear"
  }

  return (
    <div id="HeaderAnimation__container">
      <div id="HeaderAnimation__svgcontainer">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="35vw"
          height="35vw"
          animate={animation}
          transition={transition}
          style={style}
        >
        {
          arcs.map (arc => {
            return (
              <Arc
                key={arc.id}
                posX={0.175}
                posY={0.175}
                radius={arc.radius}
                startAngle={arc.startAngle}
                endAngle={arc.endAngle}
                viewport={width}
                color={arc.color}
                strokeWidth={arc.strokeWidth}
              />)
          })
        }
      </motion.svg>
    </div>

      <div id="HeaderAnimation__text">
        <hr />
        <div id="HeaderAnimation__smalltext">Hi, I'm Ashish. I am a</div>
        <div id="HeaderAnimation__largetext">FRONT END</div>
        <div id="HeaderAnimation__mediumtext">Developer</div><br />
        <hr />
      </div>
    </div>
  );
}

export default HeaderAnimation;
