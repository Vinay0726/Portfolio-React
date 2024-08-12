import React from "react";
import { motion, useInView } from "framer-motion";

const Educations = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="w-[420px]  md:w-full h-full flex flex-col items-center">
      <h1 className="text-7xl font-serif font-medium p-5">Education</h1>
      <p className="w-[400px] text-l text-center p-4 flex justify-center items-center">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div
        className="mt-10 gap-10 flex flex-col justify-center items-center md:mt-0 md:gap-2"
        ref={ref}
      >
        <motion.div
          className="w-[400px] md:w-[600px] mt-5 flex h-[150px] md:mt-0"
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -200,
            opacity: isInView ? 1 : 0,
            transition: {
              duration: 1,
              staggerChildren: 0.1,
            },
          }}
        >
          <div className=" flex flex-col justify-center items-center gap-6 w-[95%] h-full border border-blue-300 shadow-lg rounded-lg hover:bg-gray-100 hover:scale-[1.01]">
            <h1 className="text-l md:text-2xl text-gray-700 font-semibold">
              St. Vincent Pallotti College of Engineering and Technology, Nagpur
            </h1>
            <h2 className="text-sm md:text-xl text-gray-500 ">
              Bacheler of Engineering-BE, Information and Technology
            </h2>
            <h3 className="text-l md:text-xl text-gray-400">2019-2023</h3>
          </div>
          <div className="w-[5%] h-full flex flex-col justify-center items-center gap-3">
            <div className="circle h-5 w-5 border-2 border-blue-400 rounded-full"></div>
            <div className="line h-[87%] w-1 bg-green-300 rou"></div>
          </div>
        </motion.div>
        <motion.div
          className="w-[400px] md:w-[600px] flex h-[150px]"
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : 200,
            opacity: isInView ? 1 : 0,
            transition: {
              duration: 1,
              staggerChildren: 0.1,
            },
          }}
        >
          <div className=" flex flex-col justify-center items-center gap-6 w-[95%] h-full border border-blue-300 shadow-lg rounded-lg hover:bg-gray-100 hover:scale-[1.01]">
            <h1 className="text-l md:text-2xl text-gray-700 font-semibold">
              ST. FRANCIS DE SALES COLLEGE, NAGPUR
            </h1>
            <h2 className="text-sm md:text-xl text-gray-500 ">
              HSC- XII, Science
            </h2>
            <h3 className="text-l md:text-xl text-gray-400">2018</h3>
          </div>
          <div className="w-[5%] h-full flex flex-col justify-center items-center gap-3">
            <div className="circle h-5 w-5 border-2 border-blue-400 rounded-full"></div>
            <div className="line h-[87%] w-1 bg-green-300 rou"></div>
          </div>
        </motion.div>
        <motion.div
          className="w-[400px] md:w-[600px] flex h-[150px]"
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -200,
            opacity: isInView ? 1 : 0,
            transition: {
              duration: 1,
              staggerChildren: 0.1,
            },
          }}
        >
          <div className=" flex flex-col justify-center items-center gap-6 w-[95%] h-full border border-blue-300 shadow-lg rounded-lg hover:bg-gray-100 hover:scale-[1.01]">
            <h1 className="text-l md:text-2xl text-gray-700 font-semibold">
              Jawahar High School , Nagpur
            </h1>
            <h2 className="text-sm md:text-xl text-gray-500 ">SSC-X</h2>
            <h3 className="text-l md:text-xl text-gray-400">2016</h3>
          </div>
          <div className="w-[5%] h-full flex flex-col justify-center items-center gap-3">
            <div className="circle h-5 w-5 border-2 border-blue-400 rounded-full"></div>
            <div className="line h-[87%] w-1 bg-green-300 rou"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Educations;
