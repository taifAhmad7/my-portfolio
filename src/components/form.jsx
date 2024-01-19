import React from 'react';

function ContactForm() {
  return (
    <form
      action=""
      className="flex flex-col justify-center gap-y-6 p-5 bg-slate-800 backdrop-blur-md rounded-2xl mx-6 shadow shadow-sky-200"
    >
      <div className="flex flex-col justify-center gap-y-2">
        <label for="name">Name</label>
        <input
          className="bg-slate-700 px-2 py-1 rounded-md"
          type="text"
          name="sender-name"
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="flex flex-col justify-center gap-y-2">
        <label for="email">Email</label>
        <input
          className="bg-slate-700 px-2 py-1 rounded-md"
          type="email"
          name="sender-email"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-y-2">
        <label for="message" className="self-start">
          Message
        </label>
        <textarea
          className="bg-slate-700 px-2 py-1 rounded-md w-full"
          cols="60"
          rows="10"
          placeholder="Enter Your Message"
          name="message"
          required
        ></textarea>
      </div>

      <input
        className="bg-sky-500 hover:bg-sky-400 font-bold px-6 rounded-lg py-2"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default ContactForm;
