import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoB from '../../assets/images/logo-b.png'
import LogoLower from '../../assets/images/logo-lower.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {

  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`nav-bar ${isNavbarOpen ? 'open' : ''}`}>
      <button className={`toggle-button ${isNavbarOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="hamburger"></div>
      </button>
      <Link className="logo" to="/">
        <img className="main-logo" src={LogoB} alt="logo" />
        <img className="sub-logo" src={LogoLower} alt="Bradley Kimmance" />
      </Link>
      <nav className={isNavbarOpen ? 'open' : ''}>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/" onClick={() => setNavbarOpen(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setNavbarOpen(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setNavbarOpen(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className={isNavbarOpen ? 'open' : ''}>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bradleykimmance/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/bradleykimmance">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;