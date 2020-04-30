import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './header.css';
import Groups from '../groups/Groups';
import Logo from '../../assets/logo-svg.svg';
import Weeks from '../weeks/Weeks';
import MobileMenuToggleBtn from '../mobileMenu/mobileMenuToggleBtn';
import MobileMenu from '../mobileMenu/mobileMenu';
import Backdrop from '../backdrop/backdrop';



const Header = (props) => {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    shadow: 'no-shadow'
  });

  const handleMenuBtnClick = () => {
    setMenuState(
      (prevState) => {
        return {isMenuOpen: !prevState.isMenuOpen};
      }
    );
  };

  const handleBackdropClick = () => {
    setMenuState({isMenuOpen: false});
  };
  
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <a href="/class-timetable">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
          <div className="header-bar-wrapper">
            <div className="page-title">
              {props.title}
            </div>

            <div className="header-tooltip">
              <Weeks />
              <Groups />
            </div>
          </div>
        
      </div>
      <div className="mobileMenu-wrapper">
          <MobileMenuToggleBtn click={handleMenuBtnClick}/>
          <MobileMenu show={menuState.isMenuOpen} weeks={<Weeks />} groups={<Groups />} />
          <Backdrop click={handleBackdropClick} show={menuState.isMenuOpen} />
        </div>
    </header>
  );
};

export default Header;