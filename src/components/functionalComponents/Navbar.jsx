import React from 'react'
import '../styles/FuncComps.css';
import logo from '../assets/logo_white.png';
//import {BsFillPeopleFill} from "react-icons/bs";
//NavBtn,NavBtnLink
import {Nav,NavLink,Bars,NavMenu} from './NavbarElements';

const NavBar = () => {
    return (
        <Nav>
        <NavLink to="/" id="home-nav"
            aria-label="Dot Politics Logo" 
            ><h1><img id="logo" src={logo} alt="DotPolitics Logo"></img>DotPolitics</h1>
                            
        </NavLink>

        <Bars />
        <NavMenu>
            {/*<BsFillPeopleFill color='#19314d' size='3rem'/>*/}
            <NavLink to="/about">About Us</NavLink>
        </NavMenu>
        </Nav>
    );
};

export default NavBar;