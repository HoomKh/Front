"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import Typewriter from 'typewriter-effect';
/* eslint-disable react/no-unescaped-entities */


const Encryption = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/AI/index/${query}`, {
          method: 'GET',
        });
        const data = await response.json();
        console.log(data); // Handle the response data as needed
        setResponse(data.response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div
      className="flex flex-col py-20 gap-y-5"
      id="AI"
    >
      <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]" >
          <h2>
            <motion.div
              variants={slideInFromTop}
              className="text-[40px] font-medium text-center text-gray-200"
            >
              Hooman's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {' '}
                AI Bot
              </span>
            </motion.div>
          </h2>
        </div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className=" gap-y-4 sm:w-auto w-full flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto"
        >
          <motion.div className="sm:w-auto w-full flex flex-col items-center group cursor-pointer w-auto h-auto ">
            <motion.form onSubmit={handleFormSubmit} className="sm:w-auto w-full flex flex-col items-center gap-y-4">
              <motion.input
                type="text"
                value={query}
                onChange={handleInputChange}
                className="w-[90%] sm:w-[500px] bg-[#03001417] backdrop-blur-md px-4 p-2 text-gray-800 bg-gray-1000 text-left text-white border border-purple-800 rounded-[10px] shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 opacity-[0.9] transition duration-200"
                placeholder="Ask anything about me"
              />
              <motion.button type="submit" className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4">send</motion.button>
            </motion.form>
          </motion.div>


          {response && (
            <motion.div className=" Typewriter__wrapper w-[90%] sm:w-[500px] items-center p-4 rounded-md shadow-sm text-white ">
              <Typewriter
                component="p"
                options={{
                  delay: 30,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(response)
                    .start();
                }}
              />
            </motion.div>
          )}


          <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
            <h3 className="Welcome-text text-[12px]">Powered By AI</h3>
          </div>
        </motion.div>
        <div className="absolute z-[20] bottom-[10px] px-[5px]">
          <div className="cursive text-[20px] font-medium text-center text-gray-300">
            Ask me anything about me
          </div>
        </div>

        <div className="w-full flex items-start justify-center absolute">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="sm:block hidden w-full h-auto"
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
