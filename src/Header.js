import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Header.css';
import logo from './images/logo-bw.png'

function Header() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="header">
            <div className="logo" >
                <Link to="moodIcon" smooth={true} duration={500}><img src={logo} alt="logo"/></Link>
            </div>
            {/*menu*/}
            <ul className="menu">
                <li className="menu-item">
                    <Link to="content" smooth={true} duration={500}>About</Link>
                </li>
                <li className="menu-item">
                    <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                </li>
                <li className="menu-item">
                    <Link to="experience" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className="menu-item"><a href='https://drive.google.com/file/d/1SfaBvTOrEvwz8btVMvobGl_dRbdAntLD/view?usp=sharing'>CV</a></li>
                <li className="menu-item"><a href='https://www.linkedin.com/in/rachel-white-5470b4102/'>LinkedIn</a></li>
                <li className="menu-item"><a href='https://github.com/rae-el'>GitHub</a></li>
            </ul>
            {/*mobile*/}
            <div className={!nav ? 'mobileMenuHide' : 'mobileMenuShow'}>
                <ul className="mobile-menu">
                <li className="menu-item"><Link to="content"  onClick={handleClick} smooth={true} duration={500}>About</Link></li>
                <li className="menu-item"><Link to="portfolio"  onClick={handleClick} smooth={true} duration={500}>Portfolio</Link></li>
                <li className="menu-item"><Link to="experience"  onClick={handleClick} smooth={true} duration={500}>Skills</Link></li>
                <li className="menu-item"><a href='https://drive.google.com/file/d/1SfaBvTOrEvwz8btVMvobGl_dRbdAntLD/view?usp=sharing'>CV</a></li>
                <li className="menu-item"><a href='https://www.linkedin.com/in/rachel-white-5470b4102/'>LinkedIn</a></li>
                <li className="menu-item"><a href='https://github.com/rae-el'>GitHub</a></li>
                </ul>
            </div>
            {/*hamburger*/}
            <div className='hamburger' onClick={handleClick}>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
        </div>
        )
}
export default Header
