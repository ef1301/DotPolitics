import SearchBar from './components/functionalComponents/SearchBar';
import Footer from './components/functionalComponents/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search, About} from './components/views';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByLocation from './components/functionalComponents/repByLocation';
import Navbar from './components/functionalComponents/Navbar.jsx';
import PollByLocation from './components/functionalComponents/pollByLocation';
//import PDF from './components/functionalComponents/PDF';
//import { PDFViewer, Text } from '@react-pdf/renderer';
import PDFDownload from "./components/functionalComponents/PDFDownload"



function App() {
  return (
    <div className="App">
      
      <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
          <Switch>   
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search}/>
            <Route exact path='/search/Representatives/:query' children={(props) => <><SearchBar/> <PDFDownload {...props}/><RepByLocation {...props}/></>} />
            <Route exact path='/search/Polls/:query' children={(props) => <><SearchBar/><PollByLocation {...props}/></>}/>
            <Route exact path='/About' component={About}/>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
