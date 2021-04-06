import SearchBar from '../functionalComponents/SearchBar';
//import parallaxBG1 from '../assets/vote.jpg';
import parallaxBG1 from '../assets/bill.jpg';
import '../styles/HomePage.css';

const Home = () => {
    return (
        <>
            <SearchBar/>
            <div id="home-content">
                <div className="home-banner">
                    <h3>About</h3>
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