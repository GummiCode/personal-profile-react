import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import ProjectRenderer from "./ProjectRenderer";





function App() {

  const projectData = [

    {
      title: "SpaceFrens",
      summary: "Graphical representation of API data",
      aspects: [
        "Scripted API calls to fetch live data on people currently in space",
        "Produced an application to display this information in a cute way",
        "Used CSS, HTML & JavaScript to style and functionalise the app",
        "Implemented media queries so that the application displays well on common devices",
        "Looks nicest on mobiles ʕ◉ᴥ◉ʔ"
      ],
      gitHub: "https://github.com/GummiCode/spacefrens",
      url: "https://spacefrens.herokuapp.com/",
      image: "./images/spacefrens-demo.png",
      featureTextColor: "#DEDDE3",
      backgroundColor: "#687697"
    },
  
    {
      title: "Queer Family Tea",
      summary: "Social Event News & Information Site",
      aspects: [
        "Collaborative project to create a new site for a monthly social event",
        "Created using React with styled-components",
        "Blog articles procedurally generated using objects fetched from extrenal API",
        "Heavy styling"
      ],
      gitHub: "https://github.com/ian-antking/q-family-dinner",
      url: "https://queerfamilytea.com/#/",
      image: "./images/cat-walk-icon.png",
      featureTextColor: "#171226",
      backgroundColor: "#EAB39F"
    },
  ];
  


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
        nextSection="project0" />
      <ProjectRenderer 
        projectData={projectData}
      />
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
