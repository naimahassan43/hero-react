import React from 'react';
import './Hero.css';
import 'tachyons';

const Hero = (props)=>{
 return (
  <div>
   <h1>Welcome to Hero World</h1>
   <div className="hero-style bg-light-purple ma4 dib pa4">
     <img src="//joeschmoe.io/api/v1/jon" alt="John" />
     <h1>{props.name}</h1>
     <p>{props.work}</p>
   </div>
   <button>Subscribe</button>
  </div>
  
 )
}

export default Hero;