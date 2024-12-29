import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import h1 from './assets/h1.png';
import h1h from './assets/h1h.png';
import h2 from './assets/h2.png';
import h2h from './assets/h2h.png';
import h3 from './assets/h3.png';
import h3h from './assets/h3h.png';
import h4 from './assets/h4.png';
import h4h from './assets/h4h.png';
import discordHover from './assets/social-hub-assets/disco_h.png';
import discord from './assets/social-hub-assets/discord.png';
import medium from './assets/social-hub-assets/medium.png';
import mediumHover from './assets/social-hub-assets/medium_h.png';
import socialBackground from './assets/social-hub-assets/social.png';
import twitter from './assets/social-hub-assets/x.png';
import twitterHover from './assets/social-hub-assets/x_h.png';

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
      </div>
    </div>
  );
}

function SocialHub() {
  return (
    <div className="social-hub">
      <div className="image-wrapper-social">
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container-social discord-container"
        >
          <img src={discord} alt="Discord" className="base-image" />
          <img src={discordHover} alt="Discord Hover" className="hover-image" />
        </a>

        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container-social medium-container"
        >
          <img src={medium} alt="Medium" className="base-image" />
          <img src={mediumHover} alt="Medium Hover" className="hover-image" />
        </a>

        <a
          href="https://x.com/AbstractFrogz"
          target="_blank"
          rel="noopener noreferrer"
          className="image-container-social twitter-container"
        >
          <img src={twitter} alt="Twitter" className="base-image" />
          <img src={twitterHover} alt="Twitter Hover" className="hover-image" />
        </a>
      </div>
    </div>
  );
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
