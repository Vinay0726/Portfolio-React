
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
   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div ref={ref} className="w-full h-screen relative overflow-hidden">
      <motion.h1
        className="text-9xl font-semibold top-[15%] absolute left-[38%]"
        style={{ y: yText }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Projects
      </motion.h1>
      <motion.img
        src="/html.svg"
        className="h-28 w-28 absolute -z-[1] left-[15%] top-[15%]"
        alt="HTML"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/css.svg"
        className="h-28 w-28 absolute -z-[1] left-[25%] top-[40%]"
        alt="CSS"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/javascript1.svg"
        className="h-24 w-24 absolute -z-[1] right-[15%] top-[15%]"
        alt="JavaScript"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/reactjs.svg"
        className="h-28 w-28 absolute -z-[1] left-[35%] top-[11%]"
        alt="React"
        style={{ x: yBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/springboot.svg"
        className="h-28 w-28 absolute -z-[1] right-[35%] top-[20%]"
        alt="Spring Boot"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/mysql.svg"
        className="h-28 w-28 absolute -z-[1] right-[25%] top-[40%]"
        alt="MySQL"
        style={{ x: xBg }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/parallex2.png"
        className="w-full h-[60%] relative z-10 top-[41%]"
        alt="Parallax Background"
      />
    </div>
  );
}

export default Parallax;
