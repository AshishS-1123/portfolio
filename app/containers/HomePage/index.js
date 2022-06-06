import React from 'react';

import createSection from 'containers/Section';

import HeroSection from 'containers/HeroSection';
import ProjectSection from 'containers/ProjectSection';
import FooterSection from 'containers/FooterSection';
import ResumeSection from 'containers/ResumeSection';

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
