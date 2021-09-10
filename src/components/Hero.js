import React from "react";
import "./Hero.css";
import "tachyons";
import Herolist from "./HeroList.js";

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to Hero World!",
    };
  }

  namechange() {
    this.setState({
      name: "Subscribe to My Channel",
    });
  }
  render() {
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
          key={i}
          id={herolistArray[i].id}
          fullname={herolistArray[i].fullname}
          name={herolistArray[i].name}
          work={herolistArray[i].work}
        />
      );
    });

    return (
      <div className="main-page">
        <h1>{this.state.name}</h1>
        <div>{arrayHeroCard}</div>

        <button onClick={() => this.namechange()}>Subscribe</button>
      </div>
    );
  }
}

// const Hero = (props) => {

// };

export default Hero;
