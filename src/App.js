import SearchBar from './components/functionalComponents/SearchBar';
import Footer from './components/functionalComponents/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search, About} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByLocation from './components/functionalComponents/repByLocation';
import PollByLocation from './components/functionalComponents/pollByLocation';
import Navbar from './components/functionalComponents/Navbar';

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
            <Route exact path='/About' component={About}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
