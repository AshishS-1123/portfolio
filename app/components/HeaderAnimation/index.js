import React from 'react'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import arcs from './animatedArcData'
import "./index.css"

function HeaderAnimation() {
  const [width, height] = useWindowSize ()

  return (
    <div id="HeaderAnimation__container">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="40.4vw" height="40.4vw">
      {
        arcs.map (arc => {
          return (
            <Arc
              key={arc.id}
              posX={0.202}
              posY={0.202}
              radius={arc.radius}
              startAngle={arc.startAngle}
              endAngle={arc.endAngle}
              viewport={width}
              color={arc.color}
              strokeWidth={arc.strokeWidth}
            />)
        })
      }
      </svg>

      <div id="HeaderAnimation__text">
        <div id="HeaderAnimation__smalltext">Hi, I'm Ashish. I am a</div>
        <div id="HeaderAnimation__largetext">FRONT END</div>
        <div id="HeaderAnimation__mediumtext">Developer</div>
      </div>
    </div>
  );
}

export default HeaderAnimation;
