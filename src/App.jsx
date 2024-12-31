import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import d from './assets/additional-assets/d.png';
import frog from './assets/additional-assets/frog.png';
import frogHover from './assets/additional-assets/frog_h.png';
import m from './assets/additional-assets/m.png';
import newsWindow from './assets/additional-assets/news-window.png';
import x from './assets/additional-assets/x.png';
import h1 from './assets/h1.png';
import h1h from './assets/h1h.png';
import h2 from './assets/h2.png';
import h2h from './assets/h2h.png';
import h3 from './assets/h3.png';
import h3h from './assets/h3h.png';
import h4 from './assets/h4.png';
import h4h from './assets/h4h.png';

function Home() {
  const navigate = useNavigate();

  const handleClick = (element) => {
    alert(`${element} button clicked!`);
  };

  const handleNavigation = () => {
    navigate('/social-hub');
  };

  return (
    <div className="home">
      <div className="image-wrapper">
        {/* Top-right button container */}
        <div className="button-container">
          <a
            href="https://example1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={d} alt="Button D" className="button-image" />
          </a>
          <a
            href="https://example2.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="Button X" className="button-image" />
          </a>
          <a
            href="https://example3.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={m} alt="Button M" className="button-image" />
          </a>
        </div>

        {/* h1 */}
        <div className="image-container h1-container">
          <img src={h1} alt="h1" className="base-image" />
          <img
            src={h1h}
            alt="h1h"
            className="hover-image"
            onClick={() => handleClick('h1')}
          />
        </div>

        {/* h2 */}
        <div className="image-container h2-container">
          <img src={h2} alt="h2" className="base-image" />
          <img
            src={h2h}
            alt="h2h"
            className="hover-image"
            onClick={() => handleClick('h2')}
          />
        </div>

        {/* h3 */}
        <div className="image-container h3-container">
          <img src={h3} alt="h3" className="base-image" />
          <img
            src={h3h}
            alt="h3h"
            className="hover-image"
            onClick={handleNavigation}
          />
        </div>

        {/* h4 */}
        <div className="image-container h4-container">
          <img src={h4} alt="h4" className="base-image" />
          <img
            src={h4h}
            alt="h4h"
            className="hover-image"
            onClick={() => handleClick('h4')}
          />
        </div>

        {/* Frog object */}
        <div className="image-container frog-container">
          <img src={frog} alt="Frog" className="base-image" />
          <img src={frogHover} alt="Frog Hover" className="hover-image" />
        </div>

        {/* News window object */}
        <div className="image-container news-window-container">
          <img src={newsWindow} alt="News Window" className="base-image" />
        </div>
      </div>
    </div>
  );
}

function SocialHub() {
  return <div></div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-hub" element={<SocialHub />} />
      </Routes>
    </Router>
  );
}

export default App;
