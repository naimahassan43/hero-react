import React from "react";
import "./Hero.css";
import "tachyons";
import Herolist from "./HeroList.js";

const Hero = (props) => {
  return (
    <div>
      <h1>Welcome to Hero World</h1>
      <Herolist id="1" name="John Smith" work="web developer" />
      <Herolist id="2" name="Raj Chowdhury" work="web developer" />
      <Herolist id="3" name="Milon Hasan" work="web developer" />
      <Herolist id="4" name="Rahul Das" work="web developer" />

      <button>Subscribe</button>
    </div>
  );
};

export default Hero;
