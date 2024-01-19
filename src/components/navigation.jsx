import React from 'react';

function Navigation() {
  return (
    <nav className="flex justify-center pt-6 pb-4 sm:border-b border-sky-200">
      <ul className="flex justify-center items-center">
        <li className="heroNav">
          <a href="#hero">Home</a>
        </li>
        <li className="heroNav">
          <a href="#projects">Projects</a>
        </li>
        <li className="heroNav">
          <a href="#skills">Skills</a>
        </li>
        <li className="heroNav">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
