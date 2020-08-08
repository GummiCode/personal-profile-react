import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import ProjectsBanner from "./ProjectsBanner";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
import Contact from "./Contact";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <Header />
      <Intro nextSection="about" />
      <About lastSection="header" nextSection="skills" />
      <Skills lastSection="about" nextSection="projects-banner" />
      <ProjectsBanner lastSection="skills" nextSection="project0" />
      <ProjectRenderer />
      <Contact />
    </div>
  );
}

export default App;
