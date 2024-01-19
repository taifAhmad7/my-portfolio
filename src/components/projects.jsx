import React from 'react';
import ProjectCard from './project-card';

const projects = [
  {
    name: 'Dashboard App',
    image: '/project-1-img.png',
    codeLink: 'https://github.com/taifAhmad7/the-wild-oasis',
    projectLink: 'https://the-wild-oasis-nine.vercel.app/',
    description: 'A Dashboard for hotel room booking',
  },
  {
    name: 'Pizza Delivery App',
    image: '/project-2-img.png',
    codeLink: 'https://fast-react-pizza-phi.vercel.app/',
    projectLink: 'https://github.com/taifAhmad7/fast-react-pizza',
    description: 'A pizza delivery app with cart and crud operations',
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
          <ProjectCard key={project.name} details={{ ...project }} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
