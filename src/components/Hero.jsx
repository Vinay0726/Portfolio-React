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
    <div className="w-screen  md:h-full md:w-screen">
      <div className="h-96 ml-5 gap-8  duration-300 mt-[70%] md:w-[400px] md:h-80 relative -z-0 flex flex-col justify-center items-start md:gap-6  md:mt-[10%] md:ml-[20%] pointer-events-none">
        <motion.div
          className="text-6xl text-gray-700 font-semibold md:text-6xl md:font-bold font-serif md:text-black"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          Vinay Thaware
        </motion.div>
        <motion.p
          className="text-gray-500 md:text-gray-700 text-xl ml-1 md:ml-0 w-80 md:text-2xl  font-semibold"
          variants={textVarient}
          initial="initial"
          animate="animate"
        >
          Web developer and FullStack developer
        </motion.p>
        <div className="w-80 h-20 md:w-72 md:h-20 flex">
          <motion.button
            type="button"
            class="pointer-events-auto text-white flex justify-center items-center h-12 md:h-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={() => setClose(false)}
            variants={textVarient}
            initial="initial"
            animate="animate"
          >
            About Me
          </motion.button>
          <a href="/Resume/VinayThaware_Resume.pdf" download={"VinayThaware_Resume"}>
            {" "}
            <motion.button
              type="button"
              class="pointer-events-auto text-white flex justify-center items-center h-12 md:h-12 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2"
              variants={textVarient}
              initial="initial"
              animate="animate"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </div>
      <div className="-left-10 -z-10 top-20 h-[600px] w-[500px] md:h-[550px]  md:w-[600px] absolute md:z-0 md:top-20 md:left-[35%] pointer-events-none">
        <motion.img
          src="/logo.png"
          className="w-full  -mt-28 h-full neon-blue"
          alt=""
          variants={logoVarient}
          initial="initial"
          animate="animate"
        />
      </div>
      <div className="flex top-40 -right-2  absolute bg-white pointer-events-none md:top-52 md:right-5  h-[312px] w-[64px] flex-col justify-center items-center gap-5 ">
        <a href="http://linkedin.com/in/vinay-thaware-7116aa266">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
            src="/linkedin.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/Vinay0726">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
            src="/github.svg"
            alt=""
          />
        </a>
        <a href="https://twitter.com/vinaythaware1">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
            src="/twitter-x.svg"
            alt=""
          />
        </a>
        <a href="mailto:vinay.thaware1@gmail.com">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
            src="/email.svg"
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/mr.vinz_1?igsh=cmNxZ3h2MTR2YnBu">
          <motion.img
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 md:h-10 md:w-10 pointer-events-auto"
            src="/instagram.svg"
            alt=""
          />
        </a>
      </div>

      <AboutMe close={close} setClose={setClose} />
      <div className=" h-10 flex justify-center items-center  relative top-40">
        <div className="h-12 w-full hidden md:block ">
          <a href="#Home">
            {" "}
            <button
              className="bg-gray-100 -mt-5 relative left-[94%] h-full w-560 text-gray-800 font-bold rounded-md hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 flex justify-center items-center"
              type="submit"
              aria-label="Go Down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                className="-rotate-90"
              >
                <path
                  fill="currentColor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                ></path>
              </svg>
            </button>
          </a>
          <a href="#Skills">
            {" "}
            <button
              className="bg-gray-100 mt-3 relative left-[94%] h-full w-560 text-gray-800 font-bold rounded-md hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 flex justify-center items-center"
              type="submit"
              aria-label="Go Down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                className="rotate-90"
              >
                <path
                  fill="currentColor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero
