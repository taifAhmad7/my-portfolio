'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import HeroAnimation from './hero-animation';
import Image from 'next/image';
import ProfilePic from '../../public/my-pic.jpg';
import Link from 'next/link';

function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 text-center items-center overflow-hidden ">
      <Image
        src={ProfilePic}
        alt="author image"
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '20px',
        }}
      />

      <div>
        <h2 className="text-sm uppercase tracking-widest pb-6 text-gray-500">
          Fullstack React Developer
        </h2>
        <h1 className="text-xl lg:text-6xl font-semibold px-10">
          <Typewriter
            words={[
              'Hi the name is Taif Ahmad',
              'Fullstack React Developer',
              'Changing ideas and UI into code',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h1>
      </div>
      <nav className="pt-2">
        <Link href="#about">
          <button className="heroNav">About</button>
        </Link>
        <Link href="#projects">
          <button className="heroNav">Projects</button>
        </Link>
        <Link href="#skills">
          <button className="heroNav">Skills</button>
        </Link>
        <Link href="#experience">
          <button className="heroNav">Experience</button>
        </Link>
      </nav>
      {/* <HeroAnimation /> */}
    </div>
  );
}

export default Hero;
