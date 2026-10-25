import React from 'react';
import {Route, Routes, Link, HashRouter } from 'react-router-dom'; // at the top
import ScrollToTop from "./ScrollToTop";
import { About } from './About';
import { Land } from './Land';
import data from './navigation.json';
import './Home.css';
import themes from './themes.json';
import { Robots } from './Robots';
import { Events } from './Events';
const pub = (p) => `${process.env.PUBLIC_URL}/${p.replace(/^\/+/, '')}`;

function setTheme(themestr) {
  const theme = themes[themestr];
  const style = document.body.style;
  Object.keys(theme).forEach((key) => {
    style.setProperty('--' + key, theme[key]);
  });
  style.background = theme.bg;
  style.setProperty('--icon-filter', themestr === 'dark' ? 'invert(1)' : 'none');
  style.setProperty('--cta-color', themestr === 'dark' ? '#00cc66' : '#cc0000');
  style.setProperty('--cta-color-hover', themestr === 'dark' ? '#00e676' : '#e60000');
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setTheme('light');
  }, []);

  // close the mobile menu when viewport becomes desktop to avoid stuck-open state
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  return (
    <div id="header">
      <button
        id="hamburber"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        <img src={pub('icons/menu.svg')} alt="" aria-hidden="true" />
      </button>

      <Link to="/" id="logo_container">
        <img src={pub('images/DART-white.svg')} id="logo" alt="logo" />
      </Link>

      <nav id="navPanel" className={menuOpen ? 'open' : ''}>
        {Object.keys(data).map((key, index) => (
          <li key={index} className="navItem">
            <Link to={data[key]} onClick={() => setMenuOpen(false)}>{key}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-links">
            <a href="mailto:wewriggers@vt.edu" className="footer-button">
              <img src={pub("/icons/email.svg")} alt="Email" />
              <span>wewriggers@vt.edu</span>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <div className="footer-links">
            <a href="https://www.instagram.com/vtdart/" target="_blank" rel="noreferrer" className="footer-button">
              <img src={`${process.env.PUBLIC_URL}/icons/instagram.svg`} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="https://discord.gg/GY4mx3Eb" target="_blank" rel="noreferrer" className="footer-button">
              <img src={pub("/icons/discord.svg")} alt="Discord" />
              <span>Discord</span>
            </a>
            <a href="https://vt.campuslabs.com/engage/organization/dart" target="_blank" rel="noreferrer" className="footer-button">
              <img src={pub("/icons/gobbler.svg")} alt="GobblerConnect" />
              <span>GobblerConnect</span>
            </a>
            <a href="https://www.linkedin.com/company/destructive-arena-robotics-team-dart/" target="_blank" rel="noreferrer" className="footer-button">
              <img src={pub("/icons/linkedin.svg")} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/@DARTatVirginiaTech" target="_blank" rel="noreferrer" className="footer-button">
              <img src={pub("/icons/youtube.svg")} alt="YouTube" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      
      </div>
    </footer>
  );
}

function Home() {
 return (
  <HashRouter>
    <ScrollToTop />
    <Header />
    <div id='content'>
        <Routes>
          <Route index element={<Land />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/robots" element={<Robots />} />
        </Routes>
      </div>
      <Footer />
  </HashRouter>
  );
}

export default Home;