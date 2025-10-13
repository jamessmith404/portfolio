import React from 'react';

const Form = () => {
  return (
    <div
      className="md:p-10 p-5 bg-[#131332] rounded-lg"
      data-aos="zoom-in"
      data-aos-delay="1300"
      data-aos-anchor-placement="top-center"
    >
      <input
        type="text"
        placeholder="Name"
        className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
      />
      <textarea
        placeholder="Your Message"
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
      ></textarea>
      <button className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 translate-all duration-300 cursor-pointer text-white rounded-full">
        Send Message
      </button>
    </div>
  );
};

export default Form;
