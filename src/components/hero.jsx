'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import HeroAnimation from './hero-animation';
import Image from 'next/image';
import ProfilePic from '../../public/my-pic.jpg';
import Link from 'next/link';
import Navigation from './navigation';

function Hero() {
  return (
    <div className="h-screen flex flex-col gap-28 border-b-slate-600">
      <Navigation />

      <div className="flex flex-col justify-center items-center gap-14">
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

        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-xl lg:text-6xl font-semibold px-10 text-sky-200">
            Hi, I am Taif Ahmad
          </h1>
          <h2 className="text-lg uppercase tracking-widest text-sky-300 shadow-sky-200">
            Fullstack React Developer
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;

{
  /* <h1 className="text-xl lg:text-6xl font-semibold px-10">
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
        </h1> */
}
