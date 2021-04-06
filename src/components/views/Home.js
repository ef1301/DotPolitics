import SearchBar from '../functionalComponents/SearchBar';
import '../styles/HomePage.css';
const Home = () => {
    return (
        <>
            <SearchBar/>
            <div id="home-content"></div>
        </>
    );
}

export default Home;