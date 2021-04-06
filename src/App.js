import SearchBar from './components/functionalComponents/SearchBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByLocation from './components/functionalComponents/repByLocation';
import PollByLocation from './components/functionalComponents/pollByLocation';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
            <Route exact path='/search/Representatives/:query' children={(props) => <><SearchBar/><RepByLocation {...props}/></>}/>
            <Route exact path='/search/Polls/:query' children={(props) => <><SearchBar/><PollByLocation {...props}/></>}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
