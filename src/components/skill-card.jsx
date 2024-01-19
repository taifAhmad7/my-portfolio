import React from 'react';
import Skill from './skill';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="flex flex-col justify-start gap-9 bg-slate-900 w-72 rounded-2xl p-6 shadow shadow-sky-200 ">
      <h3 className="text-center text-3xl border-b border-slate-400 text-sky-100 pb-4">
        {title}
      </h3>
      <ul className="flex flex-col justify-center gap-6">
        {skills.map((skill) => (
          <Skill
            className="flex gap-8"
            key={skill.tech}
            icon={skill.icon}
            tech={skill.tech}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
