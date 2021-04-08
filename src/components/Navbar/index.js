import React from 'react'

import {FcPodiumWithSpeaker} from "react-icons/fc";
import {BsHouseDoorFill} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from '../functionalComponents/NavbarElements';

const Navbar = () => {
    return (
        <>
              <Nav>
            <NavLink to="/">
            <FcPodiumWithSpeaker color='#17E0E5' size='3rem'/>
            <h1 >Dot Politics</h1>
            
            </NavLink>
            <Bars />
            <NavMenu>
            <BsHouseDoorFill color='#19314d' size='3rem'/>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <BsFillPeopleFill color='#19314d' size='3rem'/>
                <NavLink to="/about" activeStyle>
                    About Us
                </NavLink>
                
                <NavLink to="contact-us" activeStyle>
                    
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                   
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to ='/signin'></NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;