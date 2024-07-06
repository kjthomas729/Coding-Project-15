import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h1>John Doe</h1>
      <p>Hi, I'm John. I'm a web developer with a passion for creating interactive applications and experiences on the web.</p>
      <p>Email: john.doe@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/johndoe">linkedin.com/in/johndoe</a></p>
    </div>
  );
};

export default PersonalInfo;