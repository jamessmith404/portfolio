'use client';
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? 'bg-[#0f142ed9] shadow-md' : ''
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            JAMES
          </h1>
        </div>

        {/* Right side: Nav links and buttons */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
