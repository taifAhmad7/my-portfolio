'use client';

import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from './project-card';

type Props = {};

function Projects({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-9">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
