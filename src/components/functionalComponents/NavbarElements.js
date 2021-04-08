import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import{FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    
    
    background: #6BAAF3;
    height: 100px;
    display: flex;
    
    justify-content: space-between;
    padding: 0.5rem calc{{100vw -1000px} / 2};
    z-index: 10;
`

export const NavLink = styled(Link)`  // word color and Dot
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: cone;
    padding: 0 1rem;
    height: 100%;  // hight of the h1
    cursor: pointer;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;

&.action{
    color: #15cdfc;
}
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8 rem;
    cursor: pointer;
    }
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
height: 100px; // hight of the 4 navbar
font-size: 2rem;  // size of the 4 navbar
@media screen and (max-width: 768px){
    display:none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center; //background of sign in
margin-right: 11px;
padding: 1px 10px;

@media screen and (max-width: 768px){
    display:none;
}
`;


export const NavBtnLink = styled(Link)` //Sign in

border-radius: 4px;
background: #256cel;
padding: 10px 21pxl;
padding: 0 3rem;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-outerHeight;
text-decoration: none;
background: #0693E3;  //sign in background color

&:hover{
    transition: all 0.2s ease-in-outerHeight;
    background: #fff;
    color;#010606;
}
`;