import React from 'react'

const style = {
    fontFamily: 'Acme',
    fontSize: '139px',
    color: '#e8e8e8',
    width: 'auto',
    paddingLeft: '0px',
    paddingRight: '0px',
}

function Alphabet (props) {

    return (
        <React.Fragment>
            <span style={style}>
                {props.character}
            </span>
            {props.character === ' ' && <span style={style}>&nbsp;</span>}
        </React.Fragment>
    )
}

export default Alphabet
