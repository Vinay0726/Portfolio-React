import React from 'react'

function Skills() {
  return (
    <div className="w-full h-full flex flex-col ">
      <h1 className="text-center ml-10 mt-0 md:-ml-14 md:mt-80 text-5xl text-blue-400 font-semibold font-sans">
        Skills
      </h1>
      <div className=" flex flex-col h-[35%] md:flex-row justify-center items-center gap-5 mt-10 ml-40 w-[80%] md:h-[25%]">
        <div className="w-[95%] -ml-44  md:ml-0 md:w-[30%] h-full shadow-xl rounded-lg ">
          <h1 className="text-center text-gray-800 font-mono font-bold text-2xl">
            Frontend
          </h1>
          <div className="w-full flex flex-col">
            <div className="flex justify-center items-center gap-4 h-20">
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> HTML
              </button>
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> CSS
              </button>

              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> JavaScript
              </button>
            </div>
            <div className="flex mt-2 justify-center gap-4">
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> React Js
              </button>
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> Tailwind
                Css
              </button>
            </div>
          </div>
        </div>
        <div className="w-[95%] mt-5 md:mt-0 -ml-44  md:ml-0 md:w-[30%] h-full shadow-xl rounded-lg ">
          <h1 className="text-center text-gray-800 font-mono font-bold text-2xl">
            Backend
          </h1>
          <div className="w-full flex flex-col">
            <div className="flex justify-center items-center gap-4 h-20">
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> SpringBoot
              </button>
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> Hibernate
              </button>

              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> Java
              </button>
            </div>
            <div className="flex mt-2 justify-center gap-4">
              <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> MySql
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] h-[18%] mt-5 ml-[15%] md:w-[25%] md:mt-2 md:ml-[35%] md:h-[25%] shadow-2xl rounded-lg">
        <h1 className="text-center mt-5 text-gray-800 font-mono font-bold text-2xl">
          Tools
        </h1>
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-4 h-20">
            <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/reactjs.svg" className="h-full" alt="" /> VS Code
            </button>
            <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/reactjs.svg" className="h-full" alt="" /> PostMan
            </button>
          </div>
          <div className="flex -mt-2 justify-center items-center gap-4 h-20">
            <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/reactjs.svg" className="h-full" alt="" /> Git
            </button>
            <button class="bg-transparent h-12 flex justify-center items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/reactjs.svg" className="h-full" alt="" /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
