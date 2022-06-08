import React from 'react';

import createSection from 'containers/Section';

import HeroSection from 'containers/HeroSection/Loadable';
import ProjectSection from 'containers/ProjectSection/Loadable';
import FooterSection from 'containers/FooterSection/Loadable';
import ResumeSection from 'containers/ResumeSection/Loadable';

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
