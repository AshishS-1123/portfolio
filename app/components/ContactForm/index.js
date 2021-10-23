import React from 'react'

import "./index.css"

function ContactForm() {
  return (
    <form id="ContactForm__form" xmlns="http://www.w3.org/1999/xhtml">
      <p>To,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Ashish Shevale.
      </p>

      <p>From,<br /></p>
      <input type="text" />

      <p>Subject: <br /></p>
      <input type="text" />

      <p>Dear Ashish,</p>
      <textarea />

      <button type="submit">SEND</button>
    </form>
  )
}

export default ContactForm
