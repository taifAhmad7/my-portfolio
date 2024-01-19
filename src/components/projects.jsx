import React from 'react';
import ProjectCard from './project-card';

const projects = [
  {
    name: 'Dashboard App',
    img: '',
    projectLink: '#',
    codeLink: '#',
    discription: 'skjdfijdf;oasijdf;sdf',
  },
  {
    name: 'Food Delivery App',
    img: '',
    projectLink: '#',
    codeLink: '#',
    discription: 'skjdfijdf;oasijdf;sdf',
  },
  {
    name: 'skdjfsd',
    img: '',
    projectLink: '#',
    codeLink: '#',
    discription: 'skjdfijdf;oasijdf;sdf',
  },
  {
    name: 'sdjfls',
    img: '',
    projectLink: '#',
    codeLink: '#',
    discription: 'skjdfijdf;oasijdf;sdf',
  },
];

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-y-10 lg:gap-y-16">
      <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
        <h3 className="uppercase tracking-[10px] text-sky-300 text-lg md:text-xl">
          Projects
        </h3>
        <p className="font-bold self-start text-2xl lg:text-4xl text-sky-100">
          Apps I have built.
        </p>
      </div>

      <div className="grid md:grid-cols-2 justify-items-center max-w-7xl mx-auto gap-x-8 gap-y-12 md:gap-y-20 ">
        {projects.map((project) => (
          <ProjectCard key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
