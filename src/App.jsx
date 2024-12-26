import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import h1 from './assets/h1.png';
import h1h from './assets/h1h.png';
import h2 from './assets/h2.png';
import h2h from './assets/h2h.png';
import h3 from './assets/h3.png';
import h3h from './assets/h3h.png';
import h4 from './assets/h4.png';
import h4h from './assets/h4h.png';

function Home() {
  const handleClick = (element) => {
    alert(`${element} button clicked!`);
  };

  return (
    <div className="home">
      <div className="image-wrapper">
        <div className="image-container h1-container">
          <img src={h1} alt="h1" className="base-image" />
          <img
            src={h1h}
            alt="h1h"
            className="hover-image"
            onClick={() => handleClick('h1')}
          />
        </div>

        <div className="image-container h2-container">
          <img src={h2} alt="h2" className="base-image" />
          <img
            src={h2h}
            alt="h2h"
            className="hover-image"
            onClick={() => handleClick('h2')}
          />
        </div>

        <div className="image-container h3-container">
          <img src={h3} alt="h3" className="base-image" />
          <img
            src={h3h}
            alt="h3h"
            className="hover-image"
            onClick={() => handleClick('h3')}
          />
        </div>

        <div className="image-container h4-container">
          <img src={h4} alt="h4" className="base-image" />
          <img
            src={h4h}
            alt="h4h"
            className="hover-image"
            onClick={() => handleClick('h4')}
          />
        </div>
      </div>
    </div>
  );
}

function Ref() {
  return <div className="ref"></div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </Router>
  );
}

export default App;
