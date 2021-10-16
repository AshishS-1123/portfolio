import React from 'react';

import createSection from 'containers/Section'
import HeroSection from 'containers/HeroSection'
import TimelineSection from 'containers/TimelineSection'

export default function HomePage() {
  const HeroSectionWrapped = createSection(HeroSection)
  const TimelineSectionWrapped = createSection(TimelineSection)

  const sections = [
    createSection (HeroSection),
    createSection (TimelineSection)
  ]

  return (
    <React.Fragment>
      {
        sections.map (Section => {
          return <Section />
        })
      }
    </React.Fragment>
  );
}
