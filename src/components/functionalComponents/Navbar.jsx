import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import logo from '../assets/logo_white.png';


function Navbar() {
    return(
        <>
        <nav className='navbar'>   
            <Link to ='/'
             className ='navbar-logo'><img id="logo" src={logo} alt="DotPolitics Logo"></img>
                 DotPolitics
             </Link>
             <ul>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links' >
                        About us
                    </Link>
                </li>
            </ul>
            
        </nav>
        </>
    );
}
export default Navbar;