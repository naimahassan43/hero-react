import React from "react";
import "./Hero.css";
import "tachyons";
import Herolist from "./HeroList.js";

const Hero = (props) => {
  const herolistArray = [
    {
      id: 1,
      fullname: "John Smith",
      name: "jon",
      work: "Web Developer",
    },
    {
      id: 2,
      fullname: "Rajon Chowdhury",
      name: "raki",
      work: "Graphic Designer",
    },
    {
      id: 3,
      fullname: "Milon Hasan",
      name: "miln",
      work: "Network Engineer",
    },
    {
      id: 4,
      fullname: "Rahul Das",
      name: "rahi",
      work: "Front End Developer",
    },
  ];

  return (
    <div>
      <h1>Welcome to Hero World</h1>
      <Herolist
        id={herolistArray[0].id}
        fullname={herolistArray[0].fullname}
        name={herolistArray[0].name}
        work={herolistArray[0].work}
      />
      <Herolist
        id={herolistArray[1].id}
        fullname={herolistArray[1].fullname}
        name={herolistArray[1].name}
        work={herolistArray[1].work}
      />
      <Herolist
        id={herolistArray[2].id}
        fullname={herolistArray[2].fullname}
        name={herolistArray[2].name}
        work={herolistArray[2].work}
      />
      <Herolist
        id={herolistArray[3].id}
        fullname={herolistArray[3].fullname}
        name={herolistArray[3].name}
        work={herolistArray[3].work}
      />

      <button>Subscribe</button>
    </div>
  );
};

export default Hero;
