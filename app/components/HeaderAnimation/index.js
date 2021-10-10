import React from 'react'

import Arc from 'components/Arc/Loadable'
import useWindowSize from 'hooks/useWindowSize'
import "./index.css"

function HeaderAnimation() {
  const [width, height] = useWindowSize ()

  return (
    <div id="HeaderAnimation__container">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width={0.25*width} height={0.25*width}>

        <Arc posX={0.125} posY={0.125} radius={0.1} startAngle={0} endAngle={90} viewport={width} />
      </svg>
    </div>
  );
}

export default HeaderAnimation;
