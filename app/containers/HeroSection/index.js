import React from 'react'

import IconContainer from 'components/IconContainer/Loadable'
import HeaderAnimation from 'components/HeaderAnimation/Loadable'

function HeroSection () {
    return (
        <React.Fragment>
          <HeaderAnimation />
          <IconContainer />
        </React.Fragment>
    )
}

export default HeroSection
