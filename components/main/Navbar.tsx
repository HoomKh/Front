import { Socials } from '@/constants';
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="w-screen h-[65px] fixed top-0 shadow-lg justify-between shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="flex-1 justify-center font-bold hidden md:flex">
          <div className="w-[500px] h-full flex flex-row items-center justify-evenly">
            <div className="flex items-center justify-around w-full h-auto px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer hover:border-b-1 hover:border-white">
                About me
              </a>
              <a href="#skills" className="cursor-pointer hover:border-b-1 hover:border-white">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer hover:border-b-1 hover:border-white">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 !text-base text-white">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <social.src />
            </a>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Navbar;


