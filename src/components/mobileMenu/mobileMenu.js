import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/logo-svg.svg';

import './mobileMenu.css';


const MobileMenu = props => {
    let menuClasess = 'mobileMenu';
    if (props.show) {
        menuClasess = 'mobileMenu open';
    };

    return (
        <div>
            <nav className={menuClasess}>
                <div className="header-logo">
                  <a href="/class-timetable">
                    <img src={Logo} alt="Logo" />
                  </a>
                </div>
                <ul className="mobileMenu-ul">
                  <li className='headerNavItem__mobile'>
                    <Link
                      to="/class-timetable"
                      className="nav-link"
                      // style={path === '/' ? {color: about} : {color: portfolio}}
                    >
                      Расписание уроков
                    </Link>
                  </li>
                  <li className='headerNavItem__mobile'>
                    <Link
                      to="/calls"
                      className="nav-link"
                      // style={path === '/' ? {color: about} : {color: portfolio}}
                    >
                      Расписание звонков
                    </Link>
                  </li>
                  <li className='headerNavItem__mobile toolbar__item'>
                    {props.weeks}
                  </li>
                  <li className='headerNavItem__mobile toolbar__item'>
                    {props.groups}
                  </li>
                </ul>
                {/* <div className="header-tooltip">
                </div> */}
            </nav>
        </div>
    );   
};

export default withRouter(MobileMenu);