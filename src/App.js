import "./App.css";

import Header from "./sections/Header";
import About from "./sections/About";
import Objectives from "./sections/Objectives";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Objectives />
      <Experience />
      <Contact />
      <footer className="footer">© Chhaian Pin 2023</footer>
    </div>
  );
}

export default App;
