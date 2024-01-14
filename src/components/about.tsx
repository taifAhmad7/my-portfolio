import React from 'react';

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col h-screen text-center items-center max-w-3xl mx-auto">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-xl">About</h3>
      <p className="mt-8 px-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quas
        dolore eaque cumque. Ipsa suscipit impedit, atque, explicabo aliquid
        perferendis est porro quisquam unde illo facere cupiditate? Architecto,
        deserunt maxime. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Sit, ipsum culpa impedit vitae dolorem deleniti repellendus ipsa
        consectetur, deserunt sapiente voluptatum numquam, in nisi sequi soluta
        quas dolorum adipisci vero!
      </p>
    </div>
  );
}

export default About;
