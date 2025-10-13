import Link from 'next/link';
import React from 'react';
import { BiEnvelope, BiMap } from 'react-icons/bi';
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Let&apos;s connect!
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out and let&apos;s turn your vision to solution.
          </p>
          {/* Info */}
          <div className="mt-7">
            <div
              className="flex items-center space-x-3 mb-4"
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-anchor-placement="top-center"
            >
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                jamesmithwigglesworth@gmail.com
              </p>
            </div>
            <div
              className="flex items-center space-x-3 mb-4"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-center"
            >
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
          {/* Social icons */}
          <div
            className="flex items-center mt-8 space-x-3"
            data-aos="fade-up"
            data-aos-delay="400"
            // data-aos-anchor-placement="top-center"
          >
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <Link
                href="https://www.instagram.com/jamesmith_w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </Link>
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            //   data-aos-anchor-placement="top-center"
            >
              <Link
                href="https://x.com/jemeinibro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-white w-6 h-6" />
              </Link>
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="800"
            //   data-aos-anchor-placement="top-center"
            >
              <Link
                href="https://github.com/jamessmith404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white w-6 h-6" />
              </Link>
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="1000"
            //   data-aos-anchor-placement="top-center"
            >
              <Link
                href="https://www.linkedin.com/in/james-smith-wigglesworth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
