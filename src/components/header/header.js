import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './header.css';
import Groups from '../groups/Groups';
import Logo from '../../assets/logo-svg.svg';
import Weeks from '../weeks/Weeks';



const Header = (props) => {
  
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
            {/* <div className="header-tooltip__item header-tooltip__search">
              <button className="header-tooltip__button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div> */}
            {/* <div className="header-tooltip__item header-tooltip__account-nav">
              <button className="header-tooltip__button">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;