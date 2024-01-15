import React from 'react';

function ProjectCard() {
  return (
    <div className="flex flex-col bg-slate-800 w-80 h-96 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1572177812156-58036aae439c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
        alt="project image"
        className="object-cover"
      />

      <div className="h-full p-4 flex flex-col justify-between">
        <div>
          <h3>Project name</h3>
          <p>Project description</p>
        </div>

        <div className="flex flex-row gap-8 justify-center">
          <a
            className="bg-sky-500 px-6 py-1 rounded-xl hover:bg-sky-400 font-semibold"
            href=""
          >
            See app
          </a>
          <a
            className="bg-sky-500 px-6 rounded-xl py-1  hover:bg-sky-400 font-semibold"
            href=""
          >
            See code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
