import React from 'react'
import "./index.css"
import AnimatedArcs from './animatedArc';

function HeaderAnimation() {

  return (
    <div id="HeaderAnimation__container">
      <div id="HeaderAnimation_svg">
        <AnimatedArcs />
      </div>

      <div id="HeaderAnimation__text">
        <hr />
        <div id="HeaderAnimation__smalltext">Hi, I'm Ashish. I am a</div>
        <div id="HeaderAnimation__largetext"></div>
        <div id="HeaderAnimation__mediumtext">Developer</div>
        <br />
        <hr />
      </div>
    </div>
  );
}

export default HeaderAnimation;
