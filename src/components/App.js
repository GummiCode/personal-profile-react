import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
import Contact from "./Contact";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <Header nextSection="about" />
      <About lastSection="header" nextSection="skills" />
      <Skills lastSection="about" nextSection="projects-banner" />
      <Projects lastSection="skills" nextSection="project0" />
      <ProjectRenderer />
      <Contact />
    </div>
  );
}

export default App;
