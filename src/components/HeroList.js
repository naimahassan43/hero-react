import React from "react";

const Herolist = (props) => {
  return (
    <div className="hero-style bg-light-purple ma4 dib pa4">
      <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="John" />
      <h1>{props.name}</h1>
      <p>{props.work}</p>
    </div>
  );
};

export default Herolist;
