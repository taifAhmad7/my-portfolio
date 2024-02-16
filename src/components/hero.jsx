'use client';

import React from 'react';
import Image from 'next/image';
import ProfilePic from '../../public/my-pic.jpg';
import Link from 'next/link';
import Navigation from './navigation';

function Hero() {
  return (
    // <div className="h-screen flex flex-col gap-28 border-b-slate-600">
    //   <Navigation />

    //   <div className="flex flex-col justify-center items-center gap-14">
    //     <Image
    //       src={ProfilePic}
    //       alt="author image"
    //       style={{
    //         width: '200px',
    //         height: '200px',
    //         objectFit: 'cover',
    //         borderRadius: '20px',
    //       }}
    //     />

    //     <div className="flex flex-col justify-center items-center gap-8">
    //       <h1 className="text-xl lg:text-6xl font-semibold px-10 text-sky-200">
    //         Hi, I am Taif Ahmad
    //       </h1>
    //       <h2 className="text-lg uppercase tracking-widest text-sky-300 shadow-sky-200">
    //         Fullstack React Developer
    //       </h2>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen bg-tranparent text-center">
      <div className="hero-content flex-col gap-y-10">
        <img
          src="/my-pic-2.jpg"
          className="w-[150px] lg:w-[300px] rounded-full h-[150px] lg:h-[300px] object-cover shadow-2xl"
        />
        <div className=" flex flex-col gap-y-6 items-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Hi, I am Taif Ahmad
          </h1>
          <p className="text-sm lg:text-lg uppercase tracking-widest text-sky-300 shadow-sky-200">
            Fullstack React Developer
          </p>
          <button className="btn text-lg bg-sky-500 text-white hover:bg-sky-600">
            Hire me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
