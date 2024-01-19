import Image from 'next/image';
import React from 'react';

function ProjectCard({ details }) {
  const { name, image, codeLink, projectLink, description } = details;
  return (
    <div className="flex flex-col w-80 justify-start bg-slate-900 shadow shadow-sky-200 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt="project image"
        // className="object-cover"

        style={{ height: '200px', objectFit: 'cover' }}
        width={500}
        height={500}
      />

      <div className="flex flex-col h-48 justify-between p-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-sky-200">{name}</h3>
          <p className="text-sm text-sky-100">{description}</p>
        </div>

        <div className="flex flex-row gap-8 justify-center">
          <a
            className="bg-sky-500 px-6 py-1 rounded-xl hover:bg-sky-400 font-semibold"
            href={projectLink}
          >
            See app
          </a>
          <a
            className="bg-sky-500 px-6 rounded-xl py-1  hover:bg-sky-400 font-semibold"
            href={codeLink}
          >
            See code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
