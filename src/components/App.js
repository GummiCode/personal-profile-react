import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import ProjectsBanner from "./ProjectsBanner";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
import Contact from "./Contact";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <Header nextSection="intro" />
      <Intro nextSection="about" />
      <About nextSection="experience" />
      <Experience nextSection="projects-banner" />
      <ProjectsBanner nextSection="project0" />
      <ProjectRenderer />
      <Contact nextSection="header" />
    </div>
  );
}

export default App;
