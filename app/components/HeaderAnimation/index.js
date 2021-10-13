import React from 'react'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import arcs from './animatedArcData'
import "./index.css"

function HeaderAnimation() {
  const [width, height] = useWindowSize ()

  return (
    <div id="HeaderAnimation__container">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="26vw" height="26vw">

      {
        arcs.map (arc => {
          console.log(arc.strokeWidth);
          return (
            <Arc
              key={arc.id}
              posX={0.13}
              posY={0.13}
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
    </div>
  );
}

export default HeaderAnimation;
