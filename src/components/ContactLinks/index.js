import React from 'react';

import './index.css';

function ContactLinks() {
  return (
    <div id="ContactLinks__container">
      <h3>Let's Get In Touch</h3>
      <hr />

      <div>
        <h5>LinkedIn</h5>
        <a href='http://linkedin.com/in/ashish-shevale' target='_blank'>linkedin.com/in/ashish-shevale</a>
      </div>

      <div>
        <h5>GitHub</h5>
        <a href='http://github.com/AshishS-1123' target='_blank'>github.com/AshishS-1123</a>
      </div>

      <div>
        <h5>Email</h5>
        <a>shevaleashish@gmail.com</a>
      </div>

      <div>
        <h5>Phone</h5>
        <a>+91-9022160734</a>
      </div>
    </div>
  )
}

ContactLinks.propTypes = {};

export default ContactLinks;
