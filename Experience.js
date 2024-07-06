import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experienceData = [
    { title: 'Software Developer', company: 'ABC Corp', duration: 'Jan 2020 - Present' },
    { title: 'Web Developer', company: 'XYZ Inc', duration: 'Jun 2018 - Dec 2019' },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experienceData.map((exp, index) => (
        <ExperienceItem key={index} title={exp.title} company={exp.company} duration={exp.duration} />
      ))}
    </div>
  );
};

export default Experience;