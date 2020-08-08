import { FaUserAstronaut, FaTransgenderAlt  } from "react-icons/fa";

const projectData = [
  {
    title: "SpaceFrens",
    key: "SpaceFrens",
    summary: "API call with animated display.",
    aspects: [
      "Scripted API calls to fetch live data on people currently in space",
      "Produced an application to display this information in a cute way",
      "Used CSS, HTML & JavaScript to style and functionalise the app",
      "Implemented media queries so that the application displays well on common devices",
      "Looks nicest on mobiles ʕ◉ᴥ◉ʔ",
    ],
    gitHub: "https://github.com/GummiCode/spacefrens",
    url: "https://spacefrens.herokuapp.com/",
    image: "./images/spacefrens-demo.jpg",
    featureTextColor: "#272635",
    backgroundColor: "#E8E9F3",
    Icon: FaUserAstronaut,
  },

  {
    title: "Queer Family Tea",
    key: "QFT",
    summary: "Event blog with procedurally generated pages.",
    aspects: [
      "Collaborative project to create a new site for a weekly social event",
      "Created using React with styled-components",
      "Blog articles procedurally generated using objects fetched from extrenal API",
      "Extensive styling",
    ],
    gitHub: "https://github.com/ian-antking/q-family-dinner",
    url: "https://queerfamilytea.com/#/",
    image: "./images/qft-demo.png",
    featureTextColor: "#171226",
    backgroundColor: "#FE4A49",
    Icon: FaTransgenderAlt,
  },
];

export default projectData;
