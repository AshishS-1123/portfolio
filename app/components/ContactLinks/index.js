import React from 'react'

import "./index.css"

function ContactLinks() {
  return (
    <div id="ContactLinks__container">
      <h3>Let's Get In Touch</h3><hr />

      <p>
        <h5>LinkedIn</h5>
        <a>linkedin.com/in/ashish-shevale</a>
      </p>

      <p>
        <h5>GitHub</h5>
        <a>github.com/AshishS-1123</a>
      </p>

      <p>
        <h5>Email</h5>
        <a>shevaleashish@gmail.com</a>
      </p>

      <p>
        <h5>Phone</h5>
        <a>+91-9022160734</a>
      </p>
    </div>
  )
}

ContactLinks.propTypes = {};

export default ContactLinks;
