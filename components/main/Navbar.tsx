import { Socials } from '@/constants';
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="w-screen h-[65px] fixed top-0 shadow-lg justify-around shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="flex flex-row items-center px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />

        </a>
      </div>

        <div className="w-[500px] h-full sm:flex flex-row items-center justify-between md:mr-20 hidden">
          <div className="flex items-center justify-between w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 !text-base text-white">
          {Socials.map((social) => (
             <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer" >
              <social.src/>
            </a>
          ))}
        </div>
    </div>
  );
};

export default Navbar;


