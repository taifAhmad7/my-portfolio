import { motion } from 'framer-motion';
import React from 'react';
motion;

function HeroAnimation() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <motion.div
        initial={{ scale: 3, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute border-teal-600 rounded-full border-2 h-96 w-96"
      />
    </div>
  );
}

export default HeroAnimation;
