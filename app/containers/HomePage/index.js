import React from 'react';

import createSection from 'containers/Section'
import HeroSection from 'containers/HeroSection'
import TimelineSection from 'containers/TimelineSection'
import ProjectSection from 'containers/ProjectSection'

export default function HomePage() {
  const HeroSectionWrapped = createSection(HeroSection)
  const TimelineSectionWrapped = createSection(TimelineSection)

  const sections = [
    // createSection (HeroSection),
    // createSection (TimelineSection),
    createSection (ProjectSection)
  ]

  return (
    <React.Fragment>
      {
        sections.map ((Section, idx) => {
          return <Section key={idx}/>
        })
      }
    </React.Fragment>
  );
}
