import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav className="navbar bg-slate-900 shadow shadow-sky-200">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52"
          >
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>

            <li>
              <Link href="#blog">Blog</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase tracking-widest">
          Portfolio
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>

          {/* <li>
            <Link href="#blog">Blog</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-slate-800 text-sky-200">Login</a>
      </div>
    </nav>
  );
}

export default Navigation;
