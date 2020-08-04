import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import ProjectRenderer from "./ProjectRenderer";

function App() {
  return (
    <div data-testid="app">
      <NavBar />
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
        nextSection="project0" />
      <ProjectRenderer />
      <header>
        <h1>
          DAVID ARROWSMITH
        </h1>
        <h2> 
          JUNIOR WEB DEVELOPER 
        </h2>
      </header>
    </div>
  );
}

export default App;
