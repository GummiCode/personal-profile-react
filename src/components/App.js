import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
// import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <Header nextSection="about" />
      <About lastSection="header" nextSection="projects" />
      {/* <Skills lastSection="about" nextSection="projects-banner" /> */}
      <Projects lastSection="about" nextSection="project0" />
      <Contact />
    </div>
  );
}

export default App;
