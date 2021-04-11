import React from 'react'
import {FcPodiumWithSpeaker} from "react-icons/fc";
import {BsFillPeopleFill} from "react-icons/bs";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

const NavBar = () => {
    return (
        <Nav>
        <NavLink to="/">
        <FcPodiumWithSpeaker color='#17E0E5' size='3rem'/>
        <h1 href="/" class="logo" placeholder="" 
                            aria-label="Dot Politics Logo" 
                            aria-describedby="" > Dot Politics </h1>
                            
        </NavLink>

        <Bars />
        <NavMenu>
            <BsFillPeopleFill color='#19314d' size='3rem'/>
            <NavLink to="/about" activeStyle>About Us</NavLink>
        </NavMenu>
        </Nav>
    );
};

export default NavBar;