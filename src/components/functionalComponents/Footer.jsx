import '../styles/FuncComps.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer>
            <h1 id="logo"><img src={logo} alt="DotPolitics Logo"></img>DotPolitics</h1>
            <div id="footer-content"><h1><a href="https://forms.gle/XM1m6oiSAnDP8BMx9">Contact Us</a></h1></div>
        </footer>
    );
};

export default Footer;