import SearchBar from '../functionalComponents/SearchBar';
import '../styles/HomePage.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import About from './About';


const Home = () => {
    return (
        <>
            <SearchBar/>
            <div id="home-content">
                <div className="home-banner">
                    
                </div>
            </div>
            <div id="parallax-1"></div>
        </>
    );
}

export default Home;