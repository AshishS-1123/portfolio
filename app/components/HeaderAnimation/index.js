import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import arcs from './animatedArcData'
import "./index.css"

function HeaderAnimation() {
  // This is a custom hook used for getting screen sizes
  const [width, height] = useWindowSize ()

  // These references are used for changing the text of DOM objects during transitions
  const largeTextRef = useRef (null)
  const smallTextRef = useRef (null)

  // This is the list of all possible role texts to be animated
  const possibleTexts = [
    {large: "FRONT END", small: "Developer"},
    {large: "OPEN SOURCE", small: "Contributor"},
    {large: "REACT JS", small: "Developer"}
  ]
  // Pointer to currently displayed role text
  let currentText = 0

  const svg_animation_data = {
    animation: {
      // rotate: [90, -90]
    },
    transition: {
      duration: 3.5,
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
      // opacity: [1, 1, 1, 0, 0]
    },
    transition: {
      ...svg_animation_data.transition
    }
  }

  const handleAnimationUpdate = (latestValue) => {
    if (latestValue.rotate != -90) {
      return
    }

    // Changing text happens only at 90deg.
    currentText = (currentText + 1) % 3

    largeTextRef.current.innerText = possibleTexts[currentText].large
    smallTextRef.current.innerText = possibleTexts[currentText].small
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
          onUpdate={handleAnimationUpdate}
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
          ref={largeTextRef}
          animate={text_animation_data.animation}
          transition={text_animation_data.transition}
          id="HeaderAnimation__largetext">FRONT END</motion.div>
        <motion.div
          ref={smallTextRef}
          animate={text_animation_data.animation}
          transition={text_animation_data.transition}
          id="HeaderAnimation__mediumtext">Developer</motion.div><br />
        <hr />
      </div>
    </div>
  );
}

export default HeaderAnimation;
