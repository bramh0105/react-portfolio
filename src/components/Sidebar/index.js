import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faHome,
    faUser,
    faSuitcase,
    faClose,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faSkype,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="bramh" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='www.linkedin.com/in/bramh-prakash-tiwari-202020225'
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='/'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='/'
                    >
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='/'
                    >
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar;