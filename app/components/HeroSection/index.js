import React from 'react'

import FixedText from 'components/FixedText/Loadable'
import VariableText from 'components/VariableText/Loadable'

const styles = {
    color: "white"
}

function HeroSection () {
    return (
        <React.Fragment>
            <FixedText />
            <VariableText />
        </React.Fragment>
    )
}

export default HeroSection
