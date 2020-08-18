import { FaUserAstronaut, FaTransgenderAlt, FaCar } from "react-icons/fa";
import { GiFalling, GiSpaceShuttle } from "react-icons/gi";
import { RiDatabaseLine } from "react-icons/ri";

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
    textColor: "#000000",
    background: "#f0ddb8",
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
    textColor: "#000000",
    background: "#f0c38f",
    Icon: FaTransgenderAlt,
  },

  {
    title: "Platformer 00",
    key: "platformer00",
    summary: "Browser platform game powered by a JavaScript event loop.",
    aspects: [],
    gitHub: "https://github.com/GummiCode/platformer-00",
    url: "https://gummicode.github.io/platformer-00/",
    image: "./images/platformer-00-lg.png",
    textColor: "#000000",
    background: "#d0dec2",
    Icon: GiFalling,
  },
  {
    title: "NASA Image Search",
    key: "nasa",
    summary: "React search engine for the NASA images API.",
    aspects: [],
    gitHub: "https://github.com/GummiCode/nasa-image-search",
    url: "https://gummicode.github.io/nasa-image-search/",
    image: "./images/nasa-demo.png",
    textColor: "#000000",
    background: "#aecdad",
    Icon: GiSpaceShuttle,
  },
  {
    title: "TinyCarList App",
    key: "tinyCarApp",
    summary:
      "Auto trading site. Frontend with filterable listings and submission form.",
    aspects: [],
    gitHub: "https://github.com/GummiCode/tiny-car-list-app",
    url: "https://gummicode.github.io/tiny-car-list-app/#/",
    image: "./images/tinyfront-demo.png",
    textColor: "#000000",
    background: "#b4b7cf",
    Icon: FaCar,
  },
  {
    title: "TinyCarList API",
    key: "tinyCarApi",
    summary:
      "TinyCarList app backend with full CRUD suite and tests. Hosted on Heroku.",
    aspects: [],
    gitHub: "https://github.com/GummiCode/tiny-car-list-api",
    url: "https://github.com/GummiCode/tiny-car-list-api",
    image: "./images/tinyfront-demo.png",
    textColor: "#000000",
    background: "#a6b3dd",
    Icon: RiDatabaseLine,
  },
];

export default projectData;
