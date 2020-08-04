import React from "react";
import Project from "./Project";

const projectData = {
  title: "SpaceFrens",
  summary: "Graphical representation of API data",
  aspects: [
    "Scripted API calls to fetch live data on people currently in space",
    "Produced an application to display this information in a cute way",
    "Used CSS, HTML & JavaScript to style and functionalise the app",
    "Implemented media queries so that the application displays well on common devices",
    "Looks nicest on mobiles ʕ◉ᴥ◉ʔ"
  ],
  technologies: [
    "alpha", "beta", "gamma", "delta"
  ],
  gitHub: "https://github.com/GummiCode/spacefrens",
  url: "https://spacefrens.herokuapp.com/",
  image: "./images/spacefrens-demo.png"
};

const ProjectRenderer = () => {
  return (
    <Project 
      projectData={projectData}
      nextSection={"tbc"}
    />
  )
};

export default ProjectRenderer;
