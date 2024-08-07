import React,{useState} from 'react'
import {animate, motion, transform} from 'framer-motion'
import AboutMe from './AboutMe';
const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
};
const logoVarient = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Hero() {
  const [close,setClose]=useState(true);

  
  return (
    <div className="w-[100%] md:h-full md:w-screen">
      <div className="h-96 ml-5 duration-300 mt-[120%] md:w-[400px] md:h-80 relative -z-0 flex flex-col justify-center items-start gap-6  md:mt-[10%] md:ml-[20%]">
        <motion.div
          className="text-8xl md:text-6xl font-bold font-serif text-black"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          Vinay Thaware
        </motion.div>
        <motion.p
          className=" text-gray-700 text-2xl  font-semibold"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          Web developer and FullStack developer
        </motion.p>
        <div className="w-72 h-20 flex">
          <motion.button
            type="button"
            class="pointer-events-auto text-white flex justify-center items-center h-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            onClick={() => setClose(false)}
            variants={textVarient}
            initial="initial"
            animate="animate"
          >
            About Me
          </motion.button>
          <motion.button
            type="button"
            class="pointer-events-auto text-white flex justify-center items-center h-12 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            variants={textVarient}
            initial="initial"
            animate="animate"
          >
            Resume
          </motion.button>
        </div>
      </div>
      <div className="-left-20 -z-10 top-24 h-[600px] w-[500px] md:h-[550px]  md:w-[600px] absolute md:z-0 md:top-20 md:left-[35%] pointer-events-none">
        <motion.img
          src="/logo.png"
          className="w-full  -mt-28 h-full neon-blue"
          alt=""
          variants={logoVarient}
          initial="initial"
          animate="animate"
        />
      </div>
      <div className="flex top-40  absolute bg-white pointer-events-none md:top-52 md:right-5  h-[312px] w-[64px] flex-col justify-center items-center gap-5 ">
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/linkedin.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/github.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/twitter-x.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/email.svg"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.4 }}
          transition={{ duration: 0.2 }}
          className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
          src="/instagram.svg"
          alt=""
        />
      </div>
      <div></div>
      <AboutMe close={close} setClose={setClose} />
    </div>
  );
}

export default Hero
