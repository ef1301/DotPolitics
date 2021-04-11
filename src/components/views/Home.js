import SearchBar from '../functionalComponents/SearchBar';
import '../styles/HomePage.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import About from './About';


const Home = () => {
    return (
        <>
            <SearchBar/>
            <div id="home-content" aria-label="Description of what DotPolitics is.">
                <div className="home-banner" tabIndex='0'>
                    <h1>About</h1>
                    <p>DotPolitics is a useful tool to look up elected representatives across the United States <b>based on location.</b>
                    <br></br>Having the means to educate yourself and seek out representative information in a centralized manner is vital for change.
                    <br></br>We provide basic information and links to each representative's social media(s) and contact information, using the <a href="https://developers.google.com/civic-information/">Google Civics Information API</a>.
                    </p>
                </div>
            </div>
            <div id="parallax-1"></div>
        </>
    );
}

export default Home;