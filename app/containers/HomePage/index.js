import React from 'react';

import createSection from 'containers/Section'

import HeroSection from 'containers/HeroSection'
import TimelineSection from 'containers/TimelineSection'
import ProjectSection from 'containers/ProjectSection'
import FooterSection from 'containers/FooterSection'

export default function HomePage() {

  const sections = [
    // createSection (HeroSection),
    // createSection (TimelineSection),
    // createSection (ProjectSection),
    createSection (FooterSection)
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
