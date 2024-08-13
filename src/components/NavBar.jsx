import React from "react";
import {motion} from "framer-motion"
import SlideBar from "./SlideBar";


function NavBar() {
  return (
    <nav className="flex relative w-screen pointer-events-none items-center justify-center gap-60 md:justify-center md:gap-0 md:items-center h-[60px] ">
      <SlideBar />
      <div className="w-screen md:w-[1024px] flex items-center justify-between md:justify-between h-[80px]">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block   md:text-2xl w-20 h-full md:ml-0"
        >
          <img src="/logo.png" className="h-[60px] w-[60px] mt-2 pointer-events-auto" alt="" />
        </motion.span>
      </div>
      <div>
        
      </div>
    </nav>
  );
}

export default NavBar;
