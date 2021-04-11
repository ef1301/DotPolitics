import SearchBar from '../functionalComponents/SearchBar';
import '../styles/HomePage.css';

const Home = () => {
    return (
        <>
            <SearchBar/>
            <div id="home-content">
                <div className="home-banner" tabIndex='0'>
                </div>
            </div>
            <div id="parallax-1"></div>
        </>
    );
}

export default Home;