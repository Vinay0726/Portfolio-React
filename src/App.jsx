
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MatterComponent from "./components/MatterComponent";


function App() {
  return (
    <>
      <div class="absolute inset-0 -z-5 hidden md:block" id="wrapper-canvas">
        <MatterComponent/>
      </div>

      <section id="Home" className="h-full w-[100%] md:w-full">
        <NavBar />
        <Hero />
      </section>
      <section id="Skills">Skills</section>
      <section id="Projects">Projects</section>
      <section id="Education">Education</section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
