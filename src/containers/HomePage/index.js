import React from 'react';

import createSection from '../Section';

import HeroSection from '../HeroSection/Loadable';
import ProjectSection from '../ProjectSection/Loadable';
import FooterSection from '../FooterSection/Loadable';
import ResumeSection from '../ResumeSection/Loadable';

export default function HomePage() {
  const sections = [
    createSection(HeroSection),
    createSection(ProjectSection),
    createSection(ResumeSection),
    createSection(FooterSection, true),
  ];

  return (
    <React.Fragment>
      {sections.map((Section, idx) => {
        return <Section key={idx} />;
      })}
    </React.Fragment>
  );
}
