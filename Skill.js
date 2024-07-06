import React from 'react';
import './Skill.css';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <p>{name} - {level}</p>
    </div>
  );
};

export default Skill;