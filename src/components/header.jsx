'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Header() {
  return (
    <header className="sticky top-0 flex flex-row p-5 justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url={'https://www.linkedin.com/in/taif-ahmad/'}
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url={'https://github.com/taifAhmad7'}
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase text-gray-400">get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
