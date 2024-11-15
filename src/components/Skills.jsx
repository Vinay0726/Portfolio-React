import React from 'react'

function Skills() {
  return (
    <div className="flex mt-60 md:pb-20 md:pt-10 lg:p-5  flex-col ">
      <h1 className="text-center text-4xl ml-4 md:mt-44 mt-20 md:-ml-14 lg:-ml-5 lg:mt-5 md:text-5xl text-blue-400 font-semibold font-sans">
        Skills
      </h1>
      <div className=" flex flex-col mt-32  h-[30%] md:flex-row justify-center items-center gap-5 md:mt-10 ml-40 w-[80%] lg:ml-16 lg:h-[40%] lg:w-[90%] md:w-[95%] md:ml-5 md:h-[35%]">
        <div className="w-[115%] border border-blue-300 p-5 lg:p-10 -ml-48 mr-10 md:border-none md:mr-0  md:ml-0 md:w-[50%] lg:w-[35%] md:p-10  h-full shadow-xl rounded-lg ">
          <h1 className="text-center text-gray-800 font-mono font-bold text-2xl">
            Frontend
          </h1>
          <div className="w-full flex flex-col">
            <div className="flex lg:-ml-3 justify-center items-center gap-4 h-20">
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/html.svg" className="h-full" alt="" /> HTML
              </button>
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/css.svg" className="h-full" alt="" /> CSS
              </button>

              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/javascript.svg" className="h-full" alt="" />{" "}
                JavaScript
              </button>
            </div>
            <div className="flex mt-2 justify-center gap-4">
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/reactjs.svg" className="h-full" alt="" /> React Js
              </button>
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/tailwind.svg" className="h-full" alt="" /> Tailwind
                Css
              </button>
            </div>
          </div>
        </div>
        <div className="w-[115%] border border-blue-300 mt-5 p-5 lg:p-10 md:border-none md:mt-0 -ml-48 mr-10  md:ml-0 md:mr-0 lg:w-[30%] md:w-[53%]  md:p-12 h-full shadow-xl rounded-lg ">
          <h1 className="text-center text-gray-800 font-mono font-bold text-2xl">
            Backend
          </h1>
          <div className="w-full flex flex-col ">
            <div className="flex justify-center items-center gap-4 h-20">
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 lg:px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/springboot.svg" className="h-full" alt="" />{" "}
                SpringBoot
              </button>
              <button class="bg-transparent h-12 flex justify-center  text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 lg:px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/hibernate.svg" className="h-full" alt="" /> Hibernate
              </button>

              <button class="bg-transparent h-12 flex justify-center  text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 lg:px-6 border border-blue-500 hover:border-transparent rounded">
                <img src="/java.svg" className="h-full" alt="" /> Java
              </button>
            </div>
            <div className="flex mt-2 justify-center gap-4">
              <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <img src="/mysql.svg" className="h-full" alt="" /> MySql
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[91%] h-[20%] lg:h-[33%] ml-5 border border-blue-300 md:border-none p-5 mt-32 md:w-[50%] lg:w-[25%] md:mt-5 lg:mt-5 md:ml-[25%] lg:ml-[35%] md:h-[28%] md:p-0  shadow-xl rounded-lg">
        <h1 className="text-center  text-gray-800 font-mono font-bold text-2xl">
          Tools
        </h1>
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-4 h-20">
            <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/vscode.svg" className="h-full" alt="" /> VS Code
            </button>
            <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/postman.svg" className="h-full" alt="" /> PostMan
            </button>
          </div>
          <div className="flex -mt-2 justify-center items-center gap-4 h-20">
            <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/git.svg" className="h-full" alt="" /> Git
            </button>
            <button class="bg-transparent h-12 flex justify-center text-sm md:text-base items-center gap-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <img src="/github.svg" className="h-full" alt="" /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
