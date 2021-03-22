import SearchBar from './components/functionalComponents/SearchBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByLocation from './components/functionalComponents/repByLocation';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
            <Route exact path='/search/Representatives/:query' children={(props) => <RepByLocation {...props}/>}/>
            <Route exact path='/search/Polls/:query' children={(props) => <RepByLocation {...props}/>}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
