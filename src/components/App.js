import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import ProjectsBanner from "./ProjectsBanner";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
import Contact from "./Contact";
import projectData from "../assets/projectData";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <Header />
      <Intro nextSection="about" />
      <About lastSection="header" nextSection="experience" />
      <Experience lastSection="about" nextSection="projects-banner" />
      <ProjectsBanner lastSection="experience" nextSection="project0" />
      <ProjectRenderer />
      <Contact lastSection={`project${projectData.length - 1}`} />
    </div>
  );
}

export default App;
