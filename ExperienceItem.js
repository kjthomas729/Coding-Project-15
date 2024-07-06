import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ title, company, duration }) => {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
    </div>
  );
};

export default ExperienceItem;