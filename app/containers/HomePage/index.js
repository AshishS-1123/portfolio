import React from 'react';

import Section from 'containers/HomePage/Section/Loadable'
import HeroSection from 'components/HeroSection/Loadable'

export default function HomePage() {
  return (
    <React.Fragment>
        <Section>
            <HeroSection />
        </Section>
    </React.Fragment>
  );
}
