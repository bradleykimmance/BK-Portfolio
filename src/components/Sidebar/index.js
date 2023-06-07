import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoB from '../../assets/images/logo-b.png'
import LogoLower from '../../assets/images/logo-lower.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`nav-bar ${isSidebarOpen ? 'open' : ''}`}>
      <button className={`toggle-button ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="hamburger"></div>
      </button>
      <Link className={`logo ${isSidebarOpen ? 'hidden' : ''}`} to="/">
        <img src={LogoB} alt="logo" />
        <img className="sub-logo" src={LogoLower} alt="Bradley Kimmance" />
      </Link>
      <nav className={isSidebarOpen ? 'open' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
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

export default Sidebar;
