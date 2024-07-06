import React from 'react';
import EducationItem from './EducationItem';

const Education = () => {
  const educationData = [
    { institution: 'University of Somewhere', degree: 'B.Sc. in Computer Science', years: '2014 - 2018' },
  ];

  return (
    <div className="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <EducationItem key={index} institution={edu.institution} degree={edu.degree} years={edu.years} />
      ))}
    </div>
  );
};

export default Education;