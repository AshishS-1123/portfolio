import React from 'react';

let styles = {
  color: 'white',

  backgroundImage: 'url(/section_background.jpg)',
  backgroundSize: '100% 100%',
  backgroundPosition: 'left top',

  width: '100%',
  height: '76.7592vh',
  maxWidth: '1441px',
  minHeight: '720px',

  margin: '11.6204vh auto 13.6204vh auto',

  borderRadius: '8px',
  boxShadow: '5px 10px 19px 0px black',

  overflowX: "hidden",
  overflowY: "visible",
};

export default function createSection(Component, allow_overflow = false) {
  function HOC() {
    // The allow_overflow decides if we should allow child components to go beyond
    // bounds. Wrong use, but couldn't find any other solution.
    if (allow_overflow) {
      styles = { ...styles, overflowX: "visible" };
    }
    return (
      <div style={{ ...styles }}>
        <Component />
      </div>
    );
  }

  return HOC;
}
