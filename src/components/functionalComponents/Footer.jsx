import '../styles/FuncComps.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            <h1 id="logo"><img src={logo} alt="DotPolitics Logo"></img>DotPolitics</h1>
            <div id="footer-content"><a><h1>Contact Us</h1></a></div>
        </footer>
    );
};

export default Footer;