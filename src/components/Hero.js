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
      fullname: "Rajon Roy",
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

  const arrayHeroCard = herolistArray.map((herocard, i) => {
    return (
      <Herolist
        id={herolistArray[i].id}
        fullname={herolistArray[i].fullname}
        name={herolistArray[i].name}
        work={herolistArray[i].work}
      />
    );
  });

  return (
    <div className="main-page">
      <h1>Welcome to Hero World</h1>
      {arrayHeroCard}

      <button>Subscribe</button>
    </div>
  );
};

export default Hero;
