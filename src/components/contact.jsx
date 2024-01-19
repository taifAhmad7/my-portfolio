import React from 'react';
import ContactForm from './form';
import { IoIosMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-36 lg:mt-56 gap-y-10 lg:gap-y-16">
      <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4">
        <h2 className="uppercase tracking-widest text-sky-300 text-lg lg:text-xl">
          Contact me:
        </h2>
        <p className="font-bold self-start text-2xl lg:text-4xl text-sky-100">
          Get in touch. Lets talk.
        </p>
      </div>

      <div className="flex flex-col gap-y-6  md:flex-row justify-center items-center gap-x-16">
        <div className="flex flex-col justify-center gap-8">
          <div>
            <div className="flex gap-2 text-slate-300">
              <IoIosMail style={{ height: '24px', width: '24px' }} />
              <p>a7x.taif@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2  text-slate-300">
            <FaPhone style={{ height: '24px', width: '24px' }} />
            <p>+91 8860280654</p>
          </div>
          <div className="flex gap-2  text-slate-300">
            <FaLinkedin style={{ height: '24px', width: '24px' }} />
            <a href="https://www.linkedin.com/in/taif-ahmad/">Linkedin</a>
          </div>
          <div className="flex gap-2  text-slate-300">
            <FaGithub style={{ height: '24px', width: '24px' }} />
            <a href="https://github.com/taifAhmad7">Github</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
