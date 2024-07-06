import React from 'react';
import './EducationItem.css';

const EducationItem = ({ institution, degree, years }) => {
  return (
    <div className="education-item">
      <h3>{institution}</h3>
      <p>{degree}</p>
      <p>{years}</p>
    </div>
  );
};

export default EducationItem;