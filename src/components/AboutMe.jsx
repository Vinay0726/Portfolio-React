import React from "react";
import { AiOutlineClose } from "react-icons/ai";


function AboutMe({close, setClose}) {
  

  return (
    <div
      className={`left-5 w-[90%] h-[90%] md:w-[75%]  flex flex-col md:flex-row top-10 md:left-52 shadow-2xl bg-transparent backdrop-blur-3xl absolute z-10 ${
        close ? "hidden" : "block"
      }`}
    >
      <AiOutlineClose
        className="h-[30px] w-[30px] bg-slate-100 absolute right-5 top-5 pointer-events-auto"
        onClick={() => setClose(true)}
      />

      <div className="md:w-[60%] h-full">
        <div className="ml-5 mt-20 md:ml-40 h-[55%] md:mt-5 w-full flex flex-col justify-center items-start gap-5">
          <h1 className="text-blue-600 text-2xl font-bold">ABOUT ME</h1>
          <p className="w-[90%] md:w-[60%] font-semibold">
            I help business owners and busy web developers to design and develop
            creative websites that fit their vision and attract visitors to stay
            forever. Technologies and tools that I use to create such awesome
            websites include my expertise in web development and fullstack
            development.
          </p>
          <div className="w-[85%] md:w-[55%]">
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #react.js
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #springboot
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #html
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #css
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #javascript
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #tailwind
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #bootstrap
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #java
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #sql
            </button>
            <button
              type="button"
              className="text-gray-500 bg-transparent border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              #github
            </button>
          </div>
        </div>
        <div className=" h-[45%] w-full">
          <h1 className="ml-5 mt-5 md:mt-0 md:ml-40 text-blue-600 text-2xl font-bold">FULL STACK</h1>
          <div className="flex ml-5 gap-5 w-[60%] md:ml-40 mt-10">
            <div className="flex flex-col justify-center items-center">
              <img src="/reactjs.svg" className="h-[80px] w-[80px]" alt="" />
              <p className="text-blue-300 font-semibold">React Js</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/springboot.svg" alt="" className="h-[80px] w-[80px]" />
              <p className="text-green-300 font-semibold">SpringBoot</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/mysql.svg" alt="" className="h-[80px] w-[80px]" />
              <p className="text-orange-400 font-semibold">MySQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30%] w-[100%] md:w-[40%] md:h-full flex justify-center items-center border-gray-60000">
        <img src="/coder.svg" alt="" />
      </div>
    </div>
  );
}

export default AboutMe;
