
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MatterComponent from "./components/MatterComponent";
import Skills from "./components/Skills";
import Parallex from "./components/Parallex";
import PortFolio from "./components/PortFolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <section id="Home" className="h-full w-[100%] md:w-full">
        <div class="absolute inset-0 -z-5 hidden md:block" id="wrapper-canvas">
          <MatterComponent />
        </div>
        <NavBar />
        <Hero />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section ><Parallex/></section>
      {/* <section id="Projects">Projects</section> */}
      <PortFolio/>
      <section id="Education">Education</section>
      <section id="Contact"><Contact/></section>
    </>
  );
}

export default App;
