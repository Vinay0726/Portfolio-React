
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
   const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  return (
    <div ref={ref} className="w-full  h-screen relative overflow-hidden">
      <motion.h1
        className="text-6xl left-[25%] top-[25%]  md:text-9xl font-semibold md:top-[20%] absolute md:left-[38%]"
        style={{ y: yText }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>
      <motion.img
        src="/html.svg"
        className="h-16 w-16 left-[5%] top-[15%] md:h-28 md:w-28 absolute -z-[1] md:left-[15%] md:top-[15%]"
        alt="HTML"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/css.svg"
        className="h-16 w-16 left-[15%] top-[50%]  md:h-28 md:w-28 absolute -z-[1] md:left-[25%] md:top-[40%]"
        alt="CSS"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/javascript1.svg"
        className="h-14 w-14 right-[5%] top-[15%] md:h-24 md:w-24 absolute -z-[1] md:right-[15%] md:top-[15%]"
        alt="JavaScript"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/reactjs.svg"
        className="h-20 w-20 left-[30%] top-[19%]  md:h-28 md:w-28 absolute -z-[1] md:left-[35%] md:top-[16%]"
        alt="React"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/springboot.svg"
        className="h-20 w-20 right-[25%] top-[31%]  md:h-28 md:w-28 absolute -z-[1] md:right-[35%] md:top-[25%]"
        alt="Spring Boot"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/mysql.svg"
        className="h-20 w-20 right-[15%] top-[50%]  md:h-28 md:w-28 absolute -z-[1] md:right-[25%] md:top-[40%]"
        alt="MySQL"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/parallex2.png"
        className="w-full h-[35%] top-[65%] md:h-[50%] relative z-[5] md:top-[50%]"
        alt="Parallax Background"
      />
    </div>
  );
}

export default Parallax;
