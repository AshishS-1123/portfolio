import React from 'react'

import "./index.css"

function Resume() {
  return (
    <div className="Resume__container">
      <div>
        <button>
          <img src="/download.svg" />
          Download
        </button>
      </div>
      <p>My Official Resume</p>
    </div>
  )
}

Resume.propTypes = {};

export default Resume;
