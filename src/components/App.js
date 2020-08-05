import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import ProjectsBanner from "./ProjectsBanner";
import ProjectRenderer from "./ProjectRenderer";
import Contact from "./Contact";

import projectData from "../assets/projectData"

function App() {

  return (
    <div data-testid="app">
      <NavBar
        projectData={projectData}
      />
      <Header 
        nextSection="intro"
      />
      <Intro 
        nextSection="about"
      />
      <About 
        nextSection="experience"
      />
      <Experience
        nextSection="projects-banner" 
      />
      <ProjectsBanner
        nextSection="project0"
      />
      <ProjectRenderer 
        projectData={projectData}
      />
      <Contact
        nextSection="header" 
      />
    </div>
  );
}

export default App;
