
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MatterComponent from "./components/MatterComponent";
import Skills from "./components/Skills";
import Parallex from "./components/Parallex";
import PortFolio from "./components/PortFolio";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Cursor from "./components/Cursor";


function App() {
  return (
    <>
      <div>
       <Cursor/>
        <section id="Home" className="h-full  w-screen md:w-full">
          <div
            class="absolute inset-0 -z-5 h-screen hidden md:block"
            id="wrapper-canvas"
          >
            <MatterComponent />
          </div>
          <NavBar />
          <Hero />
        </section>
        <section id="Skills">
          <Skills />
        </section> 
        <section>
          <Parallex />
        </section>
        <PortFolio />
        <section id="Education" className="mb-52">
          <Educations />
        </section>
        <section id="Contact">
          <Contact />
        </section> 
      </div>
    </>
  );
}

export default App;
