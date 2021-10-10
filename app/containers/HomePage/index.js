import React from 'react';

import Section from 'containers/Section/Loadable'
import HeroSection from 'containers/HeroSection/Loadable'

export default function HomePage() {
  return (
    <React.Fragment>
        <Section>
            <HeroSection />
        </Section>
    </React.Fragment>
  );
}
