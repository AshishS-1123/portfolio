import React from 'react'

import "./index.css"

function Envelope() {
  return (
    <div id="Envelope__container">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="672.289" height="1010.332" viewBox="0 0 672.289 1010.332">
        <defs>
          <filter id="Rectangle_5" x="0.889" y="241.332" width="671" height="769" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feFlood flood-opacity="0.871"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Path_8" x="0" y="0" width="672.289" height="264.208" filterUnits="userSpaceOnUse">
            <feOffset dy="-5" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur-2"/>
            <feFlood flood-opacity="0.431"/>
            <feComposite operator="in" in2="blur-2"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Letter" x="83.389" y="65.832" width="505" height="730" filterUnits="userSpaceOnUse">
            <feOffset input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="2.5" result="blur-3"/>
            <feFlood flood-color="#fff" flood-opacity="0.741"/>
            <feComposite operator="in" in2="blur-3"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Path_10" x="1.04" y="505.431" width="349.849" height="498.42" filterUnits="userSpaceOnUse">
            <feOffset dy="-3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur-4"/>
            <feFlood flood-opacity="0.871"/>
            <feComposite operator="in" in2="blur-4"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Path_11" x="321.04" y="505.431" width="349.849" height="498.42" filterUnits="userSpaceOnUse">
            <feOffset dy="-3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="5" result="blur-5"/>
            <feFlood flood-opacity="0.871"/>
            <feComposite operator="in" in2="blur-5"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Path_9" x="6" y="739" width="660.289" height="253.208" filterUnits="userSpaceOnUse">
            <feOffset dy="-10" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur-6"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur-6"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g id="Envelope_" data-name="Envelope " transform="translate(-887.111 -1109.668)">
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Rectangle_5)">
            <rect id="Rectangle_5-2" data-name="Rectangle 5" width="641" height="739" transform="translate(15.89 253.33)" fill="#151515"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Path_8)">
            <path id="Path_8-2" data-name="Path 8" d="M323,39.668,644.4,273.877H2.111Z" transform="translate(12.89 -19.67)" fill="#151515"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Letter)">
            <rect id="Letter-2" data-name="Letter" width="490" height="715" transform="translate(90.89 73.33)" fill="#fff"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Path_10)">
            <path id="Path_10-2" data-name="Path 10" d="M580.482-45.972,814,273.877H345.582Z" transform="translate(289.92 177.85) rotate(90)" fill="#151515"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Path_11)">
            <path id="Path_11-2" data-name="Path 11" d="M234.9,319.849,468.42,0H0Z" transform="translate(655.89 523.43) rotate(90)" fill="#151515"/>
          </g>
          <g transform="matrix(1, 0, 0, 1, 887.11, 1109.67)" filter="url(#Path_9)">
            <path id="Path_9-2" data-name="Path 9" d="M323,39.668,644.4,273.877H2.111Z" transform="translate(12.89 718.33)" fill="#151515"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Envelope;
