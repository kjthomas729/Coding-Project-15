import React from 'react';
import Skill from './Skill';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;