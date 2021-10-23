import React from 'react'

import "./index.css"

function Resume() {
  return (
    <div id="Resume__container">
      <h5>Here Is My Resume, In Case You Want To See It...</h5>

      <div>
        <button>
          <img src="/download.svg" />
          Download
        </button>
      </div>
    </div>
  )
}

Resume.propTypes = {};

export default Resume;
