import React from 'react'
import { motion } from 'framer-motion'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import arcs from './animatedArcData'
import "./index.css"

function HeaderAnimation() {
  const [width, height] = useWindowSize ()

  const svg_animation_data = {
    animation: {
      rotate: [90, -90]
    },
    transition: {
      duration: 4,
      yoyo: Infinity,
      ease: "easeInOut"
    },
    style: {
      originX: "50%",
      originY: "50%",
    }
  }

  const text_animation_data = {
    animation: {
      opacity: [1, 1, 1, 0, 0]
    },
    transition: {
      ...svg_animation_data.transition
    }
  }

  return (
    <div id="HeaderAnimation__container">
      <div id="HeaderAnimation__svgcontainer">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="35vw"
          height="35vw"
          animate={svg_animation_data.animation}
          transition={svg_animation_data.transition}
          style={svg_animation_data.style}
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
        <motion.div
          animate={text_animation_data.animation}
          transition={text_animation_data.transition}
          id="HeaderAnimation__largetext">FRONT END</motion.div>
        <motion.div
          animate={text_animation_data.animation}
          transition={text_animation_data.transition}
          id="HeaderAnimation__mediumtext">Developer</motion.div><br />
        <hr />
      </div>
    </div>
  );
}

export default HeaderAnimation;
