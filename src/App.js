import SearchBar from './components/functionalComponents/SearchBar';
import Footer from './components/functionalComponents/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByLocation from './components/functionalComponents/repByLocation';
import Navbar from './components/Navbar';
import PollByLocation from './components/functionalComponents/pollByLocation';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
          <Switch>   
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
            <Route exact path='/search/Representatives/:query' children={(props) => <><SearchBar/><RepByLocation {...props}/></>}/>
            <Route exact path='/search/Polls/:query' children={(props) => <><SearchBar/><PollByLocation {...props}/></>}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
