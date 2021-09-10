import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';

ReactDOM.render(
  <React.StrictMode>
    <Hero id="1" name="John Smith" work="web developer" />
    <Hero id="2" name="John Smith" work="web developer" />
    <Hero id="3" name="John Smith" work="web developer" />
    <Hero id="4" name="John Smith" work="web developer" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
