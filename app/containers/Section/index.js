import React from 'react'
import Container from 'react-bootstrap/Container'

const styles = {
    color: "white",

    backgroundImage: 'url(/section_background.jpg)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'left top',

    width: "75.1041vw",
    height: "76.7592vh",

    margin: "11.6204vh auto 13.6204vh auto",

    borderRadius: "8px",
    boxShadow: "5px 10px 19px 0px black"
}

export default function createSection(Component) {
    function HOC () {
      return (
        <div style={styles}>
          <Component />
        </div>
      )
    }

    return HOC
}
