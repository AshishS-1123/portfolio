import React from 'react';

import "./index.css"

function IconContainer() {

  return (
    <div id="IconContainer__container">
      <span>
        <a href="http://linkedin.com/in/ashish-shevale" target="_blank">
          <img src="/linkedin.png" alt="linkedin icon"/>
        </a>
      </span>

      <span>
        <a href="http://github.com/AshishS-1123" target="_blank">
          <img src="/github.png" alt="github icon"/>
        </a>
      </span>

      <span>
        <a href="#ContactSection__container">
          <img src="/phone.png" alt="phone icon"/>
        </a>
      </span>

      <span>
        <a href="#ContactSection__container">
          <img src="/email.png" alt="email icon"/>
        </a>
      </span>
    </div>
  );
}

export default IconContainer;
