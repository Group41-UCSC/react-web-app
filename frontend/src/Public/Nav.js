import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' style={{float:"left"}}>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='images/GoldTroop.png' alt="Logo" width="150" height="30"/>
          </Link>
          </li>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                News
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/news-content' className='nav-links' onClick={closeMobileMenu}>
                NewsContent
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
          </li>
          <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                ContactUs
              </Link>
          </li>
            <li className='nav-item'>
              <Link to='/oldscouts' className='nav-links' onClick={closeMobileMenu}>
                OldScouts
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Nav;
