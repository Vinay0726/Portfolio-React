import React from 'react'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <div className="w-[100%] md:h-full md:w-screen">
      <div className="h-96 ml-5 mt-[120%] md:w-[400px] md:h-80 relative -z-0 flex flex-col justify-center items-start gap-6  md:mt-[10%] md:ml-[20%]">
        <div className="text-8xl md:text-6xl font-bold font-serif text-black">
          Vinay Thaware
        </div>
        <p className=" text-gray-700 text-2xl  font-semibold">
          Web developer and FullStack developer
        </p>
        <div className="w-72 h-20 flex">
          <button
            type="button"
            class="pointer-events-auto text-white flex justify-center items-center h-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            About Me
          </button>
          <button
            type="button"
            class="pointer-events-auto text-white flex justify-center items-center h-12 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="-left-20 -z-10 top-24 h-[600px] w-[600px] md:h-[650px]  md:w-[650px] absolute md:z-0 md:top-2 md:left-[40%] pointer-events-none">
        <img
          src="/logo.png"
          className="w-full h-full neon-blue"
          alt=""
         
        />
      </div>
      <div className="flex top-40  absolute bg-white pointer-events-none md:top-52 md:right-5  h-[312px] w-[64px] flex-col justify-center items-center gap-5 ">
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/linkedin.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/github.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/twitter-x.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/email.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/instagram.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero
