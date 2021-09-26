import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const TextStyleCommon = {
    position: 'relative',
    top: '3.9351vh',
    left: '6.7185vw',
    width: 'auto',
    padding: '0px 10px 0px 0px'
}

const TextStyle1 = {
    ...TextStyleCommon,
    fontFamily: 'Cairo',
    fontSize: '17px',
    color: '#cfd8dc',
    paddingTop: '14px'
    // background: 'blue'
}

const TextStyle2 = {
    ...TextStyleCommon,
    fontFamily: 'KleeRegular',
    fontSize: '34px',
    color: '#cfd8dc',
    // background: 'red'
}

function FixedText () {
    return (
        <Container>
            <Row style={{display: 'flex', flexDirection: 'row'}}>
                <span style={TextStyle1}>Hi, I am</span>
                <span style={TextStyle2}>ASHISH SHEVALE</span>
            </Row>
        </Container>
    )
}

export default FixedText
