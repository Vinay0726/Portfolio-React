import React from "react";
import { useState } from "react";
import { delay, motion, stagger } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function SlideBar() {
  const [open, setOpen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 15,
      },
    },
    closed: {
      clipPath: "circle(0px at 50px 50px)",
      transaction: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const varients1 = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Home","Skills", "Projects", "Education", "Contact"];
  return (
    <motion.div
      className="flex flex-col justify-center items-center relative z-10"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        variants={varients}
        className="bg-white w-[80%] h-[70%] md:w-[400px] md:h-full  fixed top-0 left-0 cursor-pointer "
      >
        <div className="absolute text-white  w-full h-full flex flex-col justify-center items-center">
          <motion.div
            className="flex flex-col gap-8 text-5xl text-gray-500 font-semibold w-[200px] "
            variants={varients1}
          >
            {items.map((item) => (
              <motion.a
                href={`#${item}`}
                className="flex pointer-events-auto justify-center items-center text-gray-600 font-sans text-5xl hover:translate-x-1 duration-100"
                whileHover={{ scale: 1.2 }}
                key={item}
                variants={itemVariants}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" w-[45px] h-[45px] flex justify-center items-center bg-white rounded-[50%] fixed left-[15px] top-[5px]"
      >
        {open ? (
          <AiOutlineClose className="h-[30px] w-[30px] absolute top-2 pointer-events-auto" />
        ) : (
          <AiOutlineMenu className=" h-[30px] w-[30px] pointer-events-auto" />
        )}
      </button>
    </motion.div>
  );
}

export default SlideBar;
