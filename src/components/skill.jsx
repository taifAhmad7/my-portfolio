import React from 'react';

const Skill = ({ icon, tech }) => {
  return (
    <li className="flex gap-8 text-sky-200">
      <span>{icon}</span>
      <p>{tech}</p>
    </li>
  );
};

export default Skill;
