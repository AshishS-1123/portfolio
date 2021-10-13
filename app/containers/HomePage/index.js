import React from 'react';

import createSection from 'containers/Section'
import HeroSection from 'containers/HeroSection'

export default function HomePage() {
  const HeroSectionWrapped = createSection(HeroSection)

  return (
    <React.Fragment>
      <HeroSectionWrapped />
    </React.Fragment>
  );
}
