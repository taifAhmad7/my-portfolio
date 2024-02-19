'use client';

import React from 'react';
import Image from 'next/image';
import ProfilePic from '../../public/my-pic.jpg';
import Link from 'next/link';
import Navigation from './navigation';

function Hero() {
  return (
    <div className="hero min-h-screen bg-tranparent text-center">
      <div className="hero-content flex-col gap-y-10">
        <img
          src="/my-pic-2.jpg"
          className="w-[150px] lg:w-[300px] rounded-full h-[150px] lg:h-[300px] object-cover shadow-2xl"
        />
        <div className=" flex flex-col gap-y-6 items-center">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Hi, I am Taif Ahmad
          </h1>
          <p className="text-sm lg:text-lg uppercase tracking-widest text-sky-300 shadow-sky-200">
            Web Developer specialized in React.js and Next.js
          </p>

          <button className="btn text-lg bg-sky-500 text-white hover:bg-sky-600">
            <Link href="#contact">Hire me!</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
