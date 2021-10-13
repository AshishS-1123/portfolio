import React from 'react'
import Container from 'react-bootstrap/Container'

const styles = {
    color: "white",

    backgroundImage: 'url(/section_background.jpg)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'left top',

    width: "75.1041vw",
    height: "76.7592vh",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    borderRadius: "8px",
    boxShadow: "5px 10px 12px 0px black"
}

export default function createSection(Component) {
    function HOC () {
      return (
        <Container style={styles}>
          <Component />
        </Container>
      )
    }

    return HOC
}
