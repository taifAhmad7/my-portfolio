import React from 'react';
import SkillCard from './skill-card';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const iconSize = '25px';

const frontendSkills = [
  {
    tech: 'HTML',
    icon: <FaHtml5 style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'CSS',
    icon: <FaCss3Alt style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Javascript',
    icon: <IoLogoJavascript style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'React',
    icon: <FaReact style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Redux',
    icon: <SiRedux style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Tailwind CSS',
    icon: <SiTailwindcss style={{ height: iconSize, width: iconSize }} />,
  },
];

const backendSkills = [
  {
    tech: 'Node.js',
    icon: <FaNodeJs style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Express.js',
    icon: <SiExpress style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Mongodb',
    icon: <SiMongodb style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'PostgreSQL',
    icon: <BiLogoPostgresql style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Firebase',
    icon: <SiFirebase style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'Supabase',
    icon: <RiSupabaseFill style={{ height: iconSize, width: iconSize }} />,
  },
];

const fullstackSkills = [
  {
    tech: 'Next.js',
    icon: <SiNextdotjs style={{ height: iconSize, width: iconSize }} />,
  },
  {
    tech: 'MERN',
    icon: <FaCode style={{ height: iconSize, width: iconSize }} />,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col mt-56 justify-center items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
      </h3>

      <div className="flex flex-row justify-start gap-16 mt-24">
        <SkillCard skills={frontendSkills} title={'Frontend'} />
        <SkillCard skills={backendSkills} title={'Backend'} />
        <SkillCard skills={fullstackSkills} title={'Fullstack'} />
      </div>
    </div>
  );
};

export default Skills;
